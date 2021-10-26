/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canPartition = function(nums) {

let sum = 0;
    
    for (let num of nums) {
        sum += num; // find the total of the values in the nums array
    }
    
    if (sum % 2 === 1) {
        return false; // if the value of the nums array is odd, return false
    }
    
    /* reset sum to half of the total of the values in the nums array. this will be used to determine if any subsets in the array equal half of the values in the array */
    
      sum = sum / 2;
    
    /* make an array with values from 0 to sum. this represents the possible combination sums */
      
    let combos = new Array(sum + 1);
      
    /* make each value in the combos array false */
      
    combos.fill(false);
      
     /* reset the first value in the combos array to true. we do this so that each number in the nums array will have a complement of zero */
      
    combos[0] = true;
    
    for (let num of nums) {
        
        /* iterate backwards from the target sum to the current index of the nums array */
       
        for (let i = sum; i >= num; i--) {
            
            /* the target sum will be true if a) the target sum is already true or b) we can hit the target sum by using the current number's complement */
            
            combos[i] = combos[i] || combos[i - num];
        }
    }
    
    /* return whether the final index in the combination sum array is true. this can only be true if there are two subsets with equal values */
      
    return combos[sum];
      
};
