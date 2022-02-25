/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
    if (nums === null || nums.length === 0) 
        return;
    let temp = [];
    mergeSort(nums, 0, nums.length - 1, temp);
    return nums;
};

function mergeSort(nums, start, end, temp) {
    if (start >= end) 
        return;
    // deal with first half
    mergeSort(nums, start, Math.floor((start + end) / 2), temp);
    // deal with second half
    mergeSort(nums, Math.floor((start + end) / 2) + 1, end, temp);
    // merge
    merge(nums, start, end, temp);
}

function merge(nums, start, end, temp) {
    let mid = Math.floor((start + end) / 2);
    let l_index = start;
    let r_index = mid + 1;
    let index = start;
    while (l_index <= mid && r_index <= end) {
        if (nums[l_index] < nums[r_index]) {
            temp[index++] = nums[l_index++];
        } else {
            temp[index++] = nums[r_index++];
        }
    }
    while (l_index <= mid) {
        temp[index++] = nums[l_index++];
    }
    while (r_index <= end) {
        temp[index++] = nums[r_index++];
    }
    for (let i = start; i <= end; i++) {
        nums[i] = temp[i];
    }
};
