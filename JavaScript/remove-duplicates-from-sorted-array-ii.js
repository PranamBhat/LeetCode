/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0,
        swap = true;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            if (swap) {
                nums[++i] = nums[j];
                swap = false;
            }
        } else {
            nums[++i] = nums[j];
            swap = true;
        }
    }
    let extra = nums.length - i - 1;
    while (extra--) nums.pop()
};
