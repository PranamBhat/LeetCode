/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
    
    let left = 0, right = nums.length-1;
    
    while(left < right) {
    
        const mid = left + Math.floor((right-left)/2);
        
        /* Move right pointer if num at mid is less than or equal to num at right. This means that the smallest number must be on the left side of mid including mid */
        
        if(nums[right] >= nums[mid]) {
            right = mid;
        } 
        else {
            left = mid+1;
        }
    }
    
    return nums[left];
    
};
