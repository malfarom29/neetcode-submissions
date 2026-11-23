class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowest = prices[0];
        let best = 0;

        for (const p of prices) {
            lowest = Math.min(lowest, p);
            best = Math.max(best, p - lowest);
        }

        return best;
    }
}
