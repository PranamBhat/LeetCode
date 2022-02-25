/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return true;
        if (nums[mid] > nums[left]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (nums[mid] < nums[left]) {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            left++;
        }
    }
    return false;
};
