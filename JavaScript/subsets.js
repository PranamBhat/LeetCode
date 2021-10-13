/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  var res = [];
  helper(nums, res, [], 0);
  return res;
};

var helper = function (nums, res, arr, start) {
  var len = nums.length;

  res.push(Array.from(arr));

  if (start === len) return;

  for (var i = start; i < len; i++) {
    arr.push(nums[i]);
    helper(nums, res, arr, i + 1);
    arr.pop();
  }
    
};
