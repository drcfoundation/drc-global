import axios from "axios";
import LRU from "lru-cache";

interface SiteAxiosRes<T> {
  data?: T;
  error?: any;
  timestamp?: number;
}

const cache = new LRU<string, SiteAxiosRes<any>>({
  max: 50000,
  maxAge: 1000 * 60 * 5 - 100,
});

// Several components can request the same URL in the same tick (e.g. two
// vault cards both resolving the ETH price on mount). Share one in-flight
// request across them instead of firing a duplicate call per caller — this
// matters a lot against a rate-limited free API.
const inFlight = new Map<string, Promise<SiteAxiosRes<any>>>();

export const axiosFetch = async <T = any>(
  url: string
): Promise<SiteAxiosRes<T>> => {
  const cachedData: SiteAxiosRes<T> | undefined = cache.get(url);

  if (cachedData) {
    return cachedData;
  }

  const existingRequest = inFlight.get(url);

  if (existingRequest) {
    return existingRequest;
  }

  const request = (async (): Promise<SiteAxiosRes<T>> => {
    try {
      const response = await axios.get<T>(url, {
        timeout: 6000,
      });

      const finishTime = new Date().getTime();
      const result = { data: response.data, timestamp: finishTime };

      cache.set(url, result);

      return result;
    } catch (error) {
      return { error };
    } finally {
      inFlight.delete(url);
    }
  })();

  inFlight.set(url, request);

  return request;
};
