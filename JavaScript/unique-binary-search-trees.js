/**
 * @param {number} n
 * @return {number}
 */

var numTrees = function(n) {
    
    // Create dp array
    
    let dp = new Array(n+1).fill(0);
    
    // Set base cases
    
    dp[0] = 1;
    dp[1] = 1;

    // dp[i] represents each subtree (left and right) of the root node
    
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            
            // dp[j] is the left side and dp[i-j-1] is the right side
            
            // Example: n = 2
            
            /* i = 2 & j = 0, there are 2 nodes, nodes on left of root = j = 0 and nodes on right of root = 2 - j                     (because we are using j nodes on the left) - 1 (1 to account for the root node itself), dp[i] += dp[0] *                 dp[1] = 1 * 1 = 1 */
            
            // Final iteration dp[2] += dp[1] * dp[0] = 2
            
            dp[i] += dp[j] * dp[i-j-1];
        }
    }
    return dp[n];
}
