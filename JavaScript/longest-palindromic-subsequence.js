/**
 * @param {string} s
 * @return {number}
 */

var longestPalindromeSubseq = function(s) {
    const dp = [...Array(s.length)].map(() => Array(s.length).fill(0))

    // Base case
    
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = 1
    }

    for(let i = 1; i < s.length; i++) {
        for(let j = 0; j < s.length; j++){
            if(j+i < s.length){
                
                // If the end letter and start letter are the same add 2 to the value in the bottom left diagonal. This                   // value is a potential palindrome. If the letters are not equal set the current value to the previous                   // highest palindrome subsequence
                
                dp[j][j+i] = s[j] === s[j + i] 
                    ? dp[j+1][j+i-1] + 2
                    : Math.max(dp[j][j+i-1], dp[j+1][i+j])
            }
        }
    }

    return dp[0][s.length-1]
};
