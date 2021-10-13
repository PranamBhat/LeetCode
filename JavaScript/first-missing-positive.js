/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function(nums) {
    var len = nums.length;
    var tmp = 0;
    var i = 0;
    while (i < len) {
        tmp = nums[i];
        if (tmp > 0 && tmp !== i + 1 && tmp !== nums[tmp - 1]) 
            swap(nums, i, tmp - 1);
        else 
            i++;
    }
    for (var j = 0; j < len; j++) {
        if (nums[j] !== j + 1) 
            return j + 1;
    }
    return len + 1;
};

var swap = function (arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};
