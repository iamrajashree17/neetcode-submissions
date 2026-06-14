class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minSoFar = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            minSoFar = Math.min(minSoFar, prices[i]);

            maxProfit = Math.max(maxProfit, prices[i] - minSoFar);
        }
        return maxProfit
    }
}
