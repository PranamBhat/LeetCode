/**
 * @param {number[]} nums
 * @return {number}
 */

var numberOfArithmeticSlices = function(nums) {

    let count = 0, diff, ans = 0
    for (let i = 1; i < nums.length; i++) {
        let newDiff = nums[i] - nums[i-1]
        if (newDiff === diff) ans += count++
        else diff = newDiff, count = 1
    }
    return ans
    
};
