/**
 * @param {number[]} nums
 * @return {number}
 */

var getMaxLen = function(nums) {
    
    let posLen = 0;
    let negLen = 0;
    let maxLen = 0;
    /*
    for(let i=0; i<nums.length; i++) {
        if(nums[i]<0) {
            let temp = negLen;
            negLen = posLen;
            posLen = temp;
            negLen++;
            if(posLen > 0) {
                posLen++;
            }
        }
        else if(nums[i]==0) {
            posLen = 0;
            negLen = 0;
        }
        else if(nums[i] > 0) {
            posLen++;
            if(negLen > 0)
                negLen++;
        }
        maxLen = Math.max(maxLen,posLen)
    }
      */
    for(let num of nums) {
        if(num < 0) {
            let temp = negLen;
            negLen = posLen;
            posLen = temp;
            negLen++;
            if(posLen > 0) {
                posLen++;
            }
        }
        else if(num == 0) {
            posLen = 0;
            negLen = 0;
        }
        else if(num > 0) {
            posLen++;
            if(negLen > 0)
                negLen++;
        }
        maxLen = Math.max(maxLen,posLen)
    }
    return maxLen;
};
