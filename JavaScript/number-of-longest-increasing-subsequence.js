/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumberOfLIS = function(nums) {

    const n = nums.length;
    const dp = new Array(n).fill(1);
    const counts = new Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 == dp[i]) {
                    counts[i] += counts[j];
                } 
                else if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    counts[i] = counts[j];
                }
            }
        }
    }
    
    const maxLen = Math.max(...dp);
    let ans = 0;

    for (let i = 0; i < n; i++) {
        if (dp[i] == maxLen) 
            ans += counts[i];
    }
    
    return ans;
    
};
