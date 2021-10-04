/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length
    // Create dp array
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    dp[0][1] = 1

    for(let i = 1; i < m+1; i++) {
        for(let j = 1; j < n+1; j++){
            // Add value to dp array if the cell we are looking at in the grid is not blocked
            dp[i][j] = obstacleGrid[i-1][j-1]===0 ? dp[i-1][j]+dp[i][j-1] : 0 
        }
    }
    return dp[m][n]
};
