/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    
  var res = [];

  dfs(res, [], nums);

  return res;
    
};

var dfs = function (res, arr, nums) {
    
  var len = nums.length;
  var tmp1 = null;
  var tmp2 = null;

  if (!len) return res.push(arr);

  for (var i = 0; i < len; i++) {
    tmp1 = Array.from(arr);
    tmp1.push(nums[i]);

    tmp2 = Array.from(nums);
    tmp2.splice(i, 1);

    dfs(res, tmp1, tmp2);
      
  }
    
};
