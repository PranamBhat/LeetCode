/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {

  let l=prices.length;
  let maxProfit = 0;
  let minPrice = prices[0];
    
  for(let i=1; i<l; i++) {
    maxProfit = Math.max(maxProfit, prices[i]-minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;

};
