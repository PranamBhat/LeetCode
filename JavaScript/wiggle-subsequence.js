/**
 * @param {number[]} nums
 * @return {number}
 */

var wiggleMaxLength = function(nums) {

    let len = nums.length, i = 1
    while (nums[i] === nums[i-1]) i++
    let up = nums[i-1] > nums[i], ans = 1
    for (; i < len; i++)
        if ((up && nums[i] < nums[i-1]) || (!up && nums[i] > nums[i-1]))
            up = !up, ans++
    return ans
};
