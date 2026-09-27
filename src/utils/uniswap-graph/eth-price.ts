import LRU from "lru-cache";
import { HashedSimplePriceResult } from "../../../types/api-results/simple-price";
import { axiosFetch } from "../data-fetch/axios-fetch";
import { getSimplePriceQueryUrl } from "../coingecko-endpoints";
import { mapCoinPrice } from "../data-mappings/map-coin-price";

const cache = new LRU<string, number>({
  max: 50000,
  maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
});

export const getEthPrice = async () => {
  const cacheKey = "ethPrice";
  const cachedData: number | undefined = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const { data } = await axiosFetch<HashedSimplePriceResult>(
    getSimplePriceQueryUrl({ ids: ["ethereum"] })
  );

  const ethPrice = mapCoinPrice(data)?.ethereum?.usd;

  if (ethPrice) {
    cache.set(cacheKey, ethPrice, 1000 * 60);
  }

  return ethPrice || null;
};
