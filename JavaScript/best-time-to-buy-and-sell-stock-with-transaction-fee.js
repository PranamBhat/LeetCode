/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let len = prices.length, buying = 0, selling = -prices[0]
    for (let i = 1; i < len; i++) {
        buying = Math.max(buying, selling + prices[i] - fee)
        selling = Math.max(selling, buying - prices[i])
    }
    return buying
};    
