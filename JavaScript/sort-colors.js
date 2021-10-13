/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
  var counts = [0, 0, 0];
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    counts[nums[i]]++;
  }
  for (var j = 0; j < len; j++) {
    nums[j] = j < counts[0] ? 0 : (j < counts[0] + counts[1] ? 1 : 2);
  }
};
