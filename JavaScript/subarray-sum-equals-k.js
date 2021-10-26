/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
    
    let count = 0, sum = 0;
    const map = new Map();
    
    // Add 0 to map as a sum that we have seen and 1 as its value which will be he amount of times we have seen this sum so far
    
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
       
        // Get the current sum
       
        sum += nums[i];
       
        // Increase the count if we have seen a sum that equals sum - k
        
        if (map.has(sum - k))
            count += map.get(sum - k);
       
        // Set a new value in the map or increase the amount of times this sum has been seen by 1
       
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
    
};
