/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
    // Create dp array
    const dp = new Array(n + 1).fill(1);

    // Populate dp array
    for(let row = m - 1; row > 0; row--){
        for(let col = n - 1; col > 0; col--){
            dp[col] = dp[col] + dp[col + 1];
        }
    }
    return dp[1];
}
