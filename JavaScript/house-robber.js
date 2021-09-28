/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {

    const length = nums.length;
    
    if(length === 0) {
        return 0
    } else if(length === 1) {
        return nums[0]
    }
 
   // 1  3  5  7  8 10 15 15 18 19 23 23
   // nums = [ 1, 3, 4, 4, 3, 3, 7, 2, 3, 4, 5, 1 ]
    
const house = []
    house[0] = nums[0] // 1
    house[1] = Math.max(nums[0], nums[1]) // 3
    
    for (let i = 2; i < length; i++) {
        house[i] = Math.max(nums[i] + house[i - 2], house[i - 1]);
     // house[2] = Math.max(nums[2] + house[0]), house[1]) => 5
     // house[3] = Math.max(nums[3] + house[1]), house[2]) => 7
     // house[4] = Math.max(nums[4] + house[2]), house[3]) => 8
    }
    
return house[length - 1];
    
// house = [1,  3,  5,  7,  8, 10, 15, 15, 18, 19, 23, 23]

};
