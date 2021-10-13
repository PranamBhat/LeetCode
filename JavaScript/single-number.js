/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.lastIndexOf(nums[i])) {
      return nums[i];
    } else {
      nums.splice(nums.lastIndexOf(nums[i]), 1);
    }
  }
};
