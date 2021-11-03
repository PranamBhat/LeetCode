/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function(nums) {

    if (!nums.length) 
        return -1;
  
var left = 0;
var right = nums.length - 1;
var mid1 = 0;
var mid2 = 0;
  
    while (left < right) {
    mid1 = Math.floor((left + right) / 2);
    mid2 = mid1 + 1;
    
      if (nums[mid1] < nums[mid2]) {
      left = mid2;
    } else {
      right = mid1;
    }
  }
    
  return left;
    
};
