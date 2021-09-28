/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

  if(!wordDict) return false;
	
//Create a DP table of len(s) elements, and set true when if mark index i when s(i) is a word that can be formed from wordDict
    
  let dp = new Array(s.length + 1);
  dp[0] = true; //word of length 0 is always true;
  let matches=[];
  for(let i = 1; i <= s.length; i++) {
      
    //i denotes that word length
      
    for(let j = 0; j<i; j++) {
	  	if(dp[i]) break; //will not need to set dp[i] if it's already true
        if(dp[j] && wordDict.indexOf(s.substring(i,j)) >= 0) {
          
    //dp[j] = previous substring, s.substring(i,j) = remaining substring
          
        dp[i] = true;
        break;
      }
    }
  }
  return Boolean(dp[s.length]);
};
    
