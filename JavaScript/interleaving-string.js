/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

var isInterleave = function(s1, s2, s3) {

    var dp = {};
    if (s3.length !== s1.length + s2.length) 
        return false;
    
    return helper(s1, s2, s3, 0, 0, 0, dp);
};

var helper = function (s1, s2, s3, i, j, k, dp) {
  
    var res = false;
    
    if (k >= s3.length) 
        return true;
    
    if (dp['' + i + j + k] !== undefined) 
        return dp['' + i + j + k];
    
    if (s3[k] === s1[i] && s3[k] === s2[j]) {
        res = helper(s1, s2, s3, i + 1, j, k + 1, dp) || helper(s1, s2, s3, i, j + 1, k + 1, dp);
    } 
    else if (s3[k] === s1[i]) {
        res = helper(s1, s2, s3, i + 1, j, k + 1, dp);
    } 
    else if (s3[k] === s2[j]) {
        res = helper(s1, s2, s3, i, j + 1, k + 1, dp);
    }
    
    dp['' + i + j + k] = res;
    
    return res;
    
};
