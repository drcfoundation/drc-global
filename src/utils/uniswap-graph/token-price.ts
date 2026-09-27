import LRU from "lru-cache";
import { CoinHistoryResult } from "../../../types/api-results/coin-history";
import { HashedSimplePriceResult } from "../../../types/api-results/simple-price";
import { DrCoinId, AssetKey } from "../../../types/dr-vault";
import { axiosFetch } from "../data-fetch/axios-fetch";
import {
  getCoinHistoryQueryUrl,
  getSimplePriceQueryUrl,
} from "../coingecko-endpoints";
import { mapCoinPrice } from "../data-mappings/map-coin-price";
import { toNumber } from "../format-number";
import { dataWeb3 } from "../web3/data-web3";
import { getBlockTimestamp } from "../web3/get-block-timestamp";

const cache = new LRU<string, number>({
  max: 50000,
  maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
});

type PairName = AssetKey | "drc";

const pairNameToCoinId: Record<PairName, DrCoinId> = {
  drc: "digital-reserve-currency",
  wbtc: "bitcoin",
  paxg: "pax-gold",
  weth: "ethereum",
  usdc: "usd-coin",
  farm: "harvest-finance",
  mph: "88mph",
};

const formatDateForCoingecko = (unixTimeInSec: number) => {
  const date = new Date(unixTimeInSec * 1000);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${day}-${month}-${date.getUTCFullYear()}`;
};

// Mainnet only function
export const getTokenPrice = async (
  pairName: PairName,
  blockNumber?: number
) => {
  const coinId = pairNameToCoinId[pairName];
  const cacheKey = blockNumber
    ? `${pairName}Price_${blockNumber}`
    : `${pairName}Price`;

  const cachedData: number | undefined = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    if (!blockNumber) {
      const { data } = await axiosFetch<HashedSimplePriceResult>(
        getSimplePriceQueryUrl({ ids: [coinId] })
      );
      const price = mapCoinPrice(data)?.[coinId]?.usd;

      if (price) {
        cache.set(cacheKey, price, 1000 * 60);
      }

      return price || null;
    }

    const blockTimestamp = await getBlockTimestamp(dataWeb3, blockNumber);
    const date = formatDateForCoingecko(blockTimestamp);

    const { data } = await axiosFetch<CoinHistoryResult>(
      getCoinHistoryQueryUrl({ id: coinId, date })
    );
    const price = toNumber(data?.market_data?.current_price?.usd);

    if (price) {
      cache.set(cacheKey, price);
    }

    return price || null;
  } catch (err) {
    return null;
  }
};
