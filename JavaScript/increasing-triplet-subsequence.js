/**
 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function(nums) {

    if (nums.length < 3) 
        return false;
    
    let n1 = Number.MAX_VALUE;
    let n2 = Number.MAX_VALUE;

    for(let i = 0; i < nums.length; i++) {
        
        if (nums[i] <= n1) {
            n1 = nums[i]
        } else if (nums[i] <= n2) {
            n2 = nums[i]
        } else {
            return true;
        }
    }

    return false;
    
};
