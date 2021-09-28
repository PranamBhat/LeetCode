/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    

    let i, j, k;

    for(i = m - 1, j = n - 1, k = m + n - 1; i >= 0 && j >= 0; k--){
        if(nums1[i] >= nums2[j]){
            nums1[k] = nums1[i--];
        } else {
            nums1[k] = nums2[j--];
        }
    }

    while(i >= 0) {
        nums1[k--] = nums1[i--];
    }

    while(j >= 0) {
        nums1[k--] = nums2[j--];
    }
};
    
