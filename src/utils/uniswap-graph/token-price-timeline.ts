import LRU from "lru-cache";
import { CoinMarketDataResult } from "../../../types/api-results/coin-market-data";
import { AssetKey } from "../../../types/dr-vault";
import { drAssets } from "../../data/dr/dr-vaults";
import { axiosFetch } from "../data-fetch/axios-fetch";
import { getCoinMarketDataQueryUrl } from "../coingecko-endpoints";
import { mapCoinMarketData } from "../data-mappings/map-coin-market-data";
import { getUnixTimeNowInSec } from "../timestamp";

interface PriceStep {
  date: number;
  price: number | undefined;
}
const cache = new LRU<string, PriceStep[]>({
  max: 50000,
  maxAge: 1000 * 60 * 60 * 24,
});

const dayTimeInSec = 24 * 60 * 60;

// Mainnet only function
export const getTokenPriceTimeline = async (
  tokenName: AssetKey,
  startTimestamp: number
) => {
  const cacheKey = `${tokenName}PriceTimeline`;

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    const coinId = drAssets[tokenName].id;
    const timeNow = getUnixTimeNowInSec();
    const days = Math.ceil((timeNow - startTimestamp) / dayTimeInSec) + 1;

    const { data } = await axiosFetch<CoinMarketDataResult>(
      getCoinMarketDataQueryUrl({ id: coinId, days, interval: "daily" })
    );

    const mappedTimeline = mapCoinMarketData(data);

    if (!mappedTimeline) {
      return null;
    }

    const tokenPriceTimeline: PriceStep[] = mappedTimeline.map((step) => ({
      date: Math.round(step.date / 1000),
      price: step.price,
    }));

    cache.set(cacheKey, tokenPriceTimeline);

    return tokenPriceTimeline;
  } catch (err) {
    return null;
  }
};
