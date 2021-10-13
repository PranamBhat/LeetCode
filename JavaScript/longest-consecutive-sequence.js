/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    
    // Handle base case of empty array
    
    if (!nums.length) return 0;

    // Give ability to look up nums by value
    
    const set = new Set(nums);
    let max = 0;

    for (const num of set) {
        
        // Make sure we are starting at the beginning of the sequenece
        
        if (set.has(num - 1)) continue;

        let currNum = num;
        let currMax = 1;

        // Look numbers that make a consecutive sequence
        
        while (set.has(currNum + 1)) {
          currNum++;
          currMax++;
        }
        
        // Update max
        
        max = Math.max(max, currMax);
    }

    return max;
    
};
