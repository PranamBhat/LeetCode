/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
        let maxprofit = 0;
        for (let i = 1; i < prices.length; i++) {
            // Add to the max profit total if the current price is greater than previous
            // We "sell" when the the opposite is true because we will not buy on days that dip.
            if (prices[i] > prices[i - 1])
                // Add the increse in price to our profit
                maxprofit += prices[i] - prices[i - 1];
        }
        return maxprofit;
};
