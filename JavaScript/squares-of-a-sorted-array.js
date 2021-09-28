var sortedSquares = function(nums) {
    let result = [];
    // Left and right pointer
    let l = 0;
    let r = nums.length - 1;
    // Position to add squared number to A
    let p = r;

    // Add the higher number to the array and then decrease the pointer
    while (l <= r) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            result[p--] = nums[l++] ** 2;
        } else {
            result[p--] = nums[r--] ** 2;
        }
    }

    return result;
};
