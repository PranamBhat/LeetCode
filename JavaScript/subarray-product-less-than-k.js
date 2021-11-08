/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var numSubarrayProductLessThanK = function(nums, k) {
    
    if (k <= 1) 
        return 0;
    
    var prod = 1;
    var count = 0, left = 0;
    
    for (let i = 0; i < nums.length; i++) {
            prod *= nums[i];
    
        while (prod >= k) prod /= nums[left++];
            count += i - left + 1;
        }
    
        return count;

};
