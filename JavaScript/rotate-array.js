var rotate = function(nums, k) {
   let len = nums.length,
     tempArr = [],
     i = -1;
   k = k % len;
   while(++i < len) {
     tempArr[(i+k) % len] = nums[i];
   }
   for(i = 0; i < len; i++)
     nums[i] = tempArr[i];
   return nums;
};
