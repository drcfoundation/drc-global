import LRU from "lru-cache";
import { AbiItem } from "web3-utils";
import IUniswapV2Pair from "../../contracts/IUniswapV2Pair.json";
import {
  contractNameByAddress,
  getContractAddress,
  getPairAddress,
  PairName,
} from "../../data/dr/contract-by-network";
import { dataWeb3 } from "../web3/data-web3";
import { getEthPrice } from "./eth-price";

const cache = new LRU<string, number>({
  max: 50000,
  maxAge: 1000 * 60 * 20, // 20 mins
});

// Every curated pair is quoted against WETH (the "usdc" pair IS the USDC/WETH
// pool, reused here as WETH's own primary pool), so liquidity = 2x the WETH
// side of reserves, valued in USD.
export const getTokenLiquidity = async (address: string) => {
  const cacheKey = `tokenLiquidity_${address}`;
  const cachedData: number | undefined = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const assetName = contractNameByAddress[address.toLowerCase()];
  const pairName = (assetName === "weth" ? "usdc" : assetName) as
    | PairName
    | undefined;
  const pairAddress = pairName ? getPairAddress(pairName) : undefined;

  if (!pairAddress) {
    return null;
  }

  const ethPrice = await getEthPrice();

  if (!ethPrice) {
    return null;
  }

  try {
    const pairContract = new dataWeb3.eth.Contract(
      IUniswapV2Pair.abi as AbiItem[],
      pairAddress
    );

    const [token0, reserves] = await Promise.all([
      pairContract.methods.token0().call(),
      pairContract.methods.getReserves().call(),
    ]);

    const wethAddress = getContractAddress("weth", 1).toLowerCase();
    const wethReserve =
      token0.toLowerCase() === wethAddress
        ? reserves._reserve0
        : reserves._reserve1;

    const wethReserveNum = Number(dataWeb3.utils.fromWei(wethReserve));
    const liquidity = wethReserveNum * 2 * ethPrice;

    if (liquidity) {
      cache.set(cacheKey, liquidity);
    }

    return liquidity || null;
  } catch (err) {
    return null;
  }
};
