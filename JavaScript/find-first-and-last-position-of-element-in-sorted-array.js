/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {

    const find = (target, arr, left=0, right=arr.length) => {
        while (left <= right) {
            let mid = left + right >> 1
            if (arr[mid] < target) left = mid + 1
            else right = mid - 1
        }
        return left
    } 
    let Tleft = find(target, nums)
    if (nums[Tleft] !== target) return [-1,-1]
    return [Tleft, find(target+1, nums, Tleft) - 1]

};
