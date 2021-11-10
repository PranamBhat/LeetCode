/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {

var res = [];
nums.sort((a, b) => a - b);
helper(nums, 0, res, []);
return res;

};

var helper = function (nums, start, res, now) {
  res.push(Array.from(now));

  for (var i = start; i < nums.length; i++) {
    if (i === start || nums[i] !== nums[i - 1]) {
      now.push(nums[i]);
      helper(nums, i + 1, res, now);
      now.pop();
    }
  }
    
};
