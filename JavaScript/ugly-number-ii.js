/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function(n) {
  if (n < 1) return 0;

  var dp = [1];
  var t2 = 0;
  var t3 = 0;
  var t5 = 0;

  for (var i = 1; i < n; i++) {
    dp[i] = Math.min(dp[t2] * 2, dp[t3] * 3, dp[t5] * 5);
    if(dp[i] === dp[t2]*2) t2++; 
    if(dp[i] === dp[t3]*3) t3++;
    if(dp[i] === dp[t5]*5) t5++;
  }

  return dp[n - 1];
};
