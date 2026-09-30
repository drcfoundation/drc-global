export interface CoinHistoryResult {
  market_data?: {
    current_price?: Record<string, number | undefined | null> | null;
  } | null;
}
