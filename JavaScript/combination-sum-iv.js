/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    
    // Create dp array
    const dp = Array(target+1).fill(0)
    // Set default
    dp[0] = 1
    // Loop until we hit target
    for(let i = 0; i <= target;i++) {
        // Loop through all possible nums
        for(let j = 0; j < nums.length; j++) {
            // If the sum of the current position in dp and the current num is less than target, increment the index at the sum in dp array by all the ways to make dp[i]
            if(nums[j]+i <= target) dp[nums[j]+i] += dp[i]
        }
    }
    return dp[target];
    
} ;
