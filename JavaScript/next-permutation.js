/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
if (nums.length <= 1) return;

    let leftHandSwap;

    // Loop through the provided numbers from right to left (excluding the first as we need something to compare it to)
    
    for (let i = nums.length - 2; i >= 0; i--) {
        
        // Check if this number is lower than the previous one (marks our left-hand swap)
        
        if (nums[i] < nums[i + 1]) {
            leftHandSwap = i;
            break;
        }
    }

    // Loop through the provided numbers from right to left
    
    for (let i = nums.length - 1; i > leftHandSwap; i--) {
        
        // If the number is bigger than the left-hand one
        
        if (nums[i] > nums[leftHandSwap]) {
            
            // Swap the numbers round
            
            [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];

            // Reverse the rest of the array
            
            let chopped = nums.splice(leftHandSwap + 1);
            chopped.sort((a, b) => a - b);
            nums.push(...chopped);
            return;
        }
    }

    // Right-hand swap not found, return lowest permutation instead
    
    nums.sort((a, b) => a - b); 
    
};
