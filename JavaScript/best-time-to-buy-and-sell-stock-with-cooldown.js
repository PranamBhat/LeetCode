/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function (prices) {
  const BUY = 0
  const SELL = 1
  const COOL_DOWN = 2
  let prev = [0, 0, 0]
  for (let index = prices.length - 1; index >= 0; index--) {
    const current = [0, 0, 0]
    for (let status = 0; status <= 2; status++) {
      if (status === COOL_DOWN) {
        current[status] = Math.max(
          prev[COOL_DOWN],
          -prices[index] + prev[BUY],
        )
      } else if (status === BUY) {
        current[status] = Math.max(
          prev[BUY],
          prices[index] + prev[SELL],
        )
      } else {
        current[status] = prev[COOL_DOWN]
      }
    }
    prev = current
  }
  return prev[COOL_DOWN]
}
