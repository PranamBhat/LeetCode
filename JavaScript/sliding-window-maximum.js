/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {
    if(k > nums.length || k === 0) return [];
    let res = [], maxIndex = -1;
    for(let l = 0, r = k-1;r < nums.length;l++, r++){
        if(maxIndex < l){
            // Traverse to find the maximum
            let index = l;
            for(let i = l;i <= r;i++) {
                if(nums[i] > nums[index]) index = i;
            }
            maxIndex = index;
        }
        if(nums[r] > nums[maxIndex]){
            maxIndex = r;
        }
        res.push(nums[maxIndex]);
    }
    return res;
};
