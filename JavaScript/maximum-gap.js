/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumGap = function(nums) {
    var len = nums.length;
    if (len < 2) 
        return 0;

    var max = Math.max(...nums);
    var min = Math.min(...nums);
    if (max === min) 
        return 0;

    var minBuckets = Array(len - 1).fill(Number.MAX_SAFE_INTEGER);
    var maxBuckets = Array(len - 1).fill(Number.MIN_SAFE_INTEGER);
    var gap = Math.ceil((max - min) / (len - 1));
    var index = 0;
    for (var i = 0; i < len; i++) {
        if (nums[i] === min || nums[i] === max) 
            continue;
        index = Math.floor((nums[i] - min) / gap);
        minBuckets[index] = Math.min(minBuckets[index], nums[i]);
        maxBuckets[index] = Math.max(maxBuckets[index], nums[i]);
    }

    var maxGap = Number.MIN_SAFE_INTEGER;
    var preVal = min;
    for (var j = 0; j < len - 1; j++) {
        if (minBuckets[j] === Number.MAX_SAFE_INTEGER && maxBuckets[j] === Number.MIN_SAFE_INTEGER) 
            continue;
        maxGap = Math.max(maxGap, minBuckets[j] - preVal);
        preVal = maxBuckets[j];
    }
    maxGap = Math.max(maxGap, max - preVal);

    return maxGap;
};
