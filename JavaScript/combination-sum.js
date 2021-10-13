/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
       const result = [];

    // Backtracking function to create permutations
    
    function permute(arr=[], sum=0, idx=0) {
        if(sum > target) return;
        if(sum === target) result.push(arr);

        // Start i at idx to avoid using the same combination of numbers but in a different order
        
        for(let i = idx; i < candidates.length; i++) {
            permute([...arr, candidates[i]], sum+candidates[i], i);
        }
    }
    permute()
    return result; 
    
};
