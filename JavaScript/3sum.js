/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {

    // If less than 3 elements then we can't have 3 numbers that add to 0
    
    if(nums.length < 3) return []
    const output = []

    /* Sort the array in descending order. Must add order function to sort. If not we will not get the right order. Sort converts everything to a string and sorts the array by charCode. Adding the order function to sort guarantees we will get the array in the proper descending order. */
    
    nums.sort((a,b) => a - b)

    for(let i = 0; i < nums.length - 2;i++) {
        
        // we don't want repeats, so skip numbers we've already seen
        
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i+1
        let right = nums.length-1

        /* Current number at i will be added to the current sum. We will move a left and a right pointer in the subarray of elements to the right of i to try and get a sum that will equal 0 */
        
        while (left < right) {
            
            // Get the current sum with with number at i and numbers at the left and right pointers
            
            const sum = nums[i] + nums[right] + nums[left]
            
            /* If we get 0 then we add all the numbers to output and move our left and right pointers to look for more numbers that will add to 0 with the current number at i */
            
            if(sum===0) {
                output.push([nums[i], nums[left], nums[right]])
                
                // We will move the pointers until we find a number that is not equal to each pointers current number
                
                while(nums[left]===nums[left+1]) left++
                while(nums[right]===nums[right+1]) right--
                left++
                right--
            } else if (sum > 0) {
                
                /* If the sum is greater than 0 that means we need smaller numbers to get 0 so we move the right pointer to the left */
               right--
            } else {
                
                /* If the sum is less than 0 that means we need higher numbers to get 0 so we move the left pointer to the right */
                left++
            }
        }
    }

    return output
};
