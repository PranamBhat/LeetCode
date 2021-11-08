/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {

    let l = 0;
    let r = 0;
    let ans = Infinity;
    const n = nums.length;
    let total = 0;
    
    while (l < n) {
        while(r < n && total < target) {
            total += nums[r];
            r++;
        }
        
        if (total < target) 
            break;
        
        ans = Math.min(ans, r - l);
        total -= nums[l];
        l++;
    }
    
    return ans === Infinity ? 0 : ans;
    
};
