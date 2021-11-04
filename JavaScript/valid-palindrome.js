/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {

    if (s.length === 0) 
        return true;

  s = s.toLowerCase();
  let i = 0, j = s.length - 1;
  
    while (i < j) {
    if ((s[i] < 'a' || s[i] > 'z') && (s[i] < '0' || s[i] > '9')) {
      i++;
      continue;
    }
        
    if ((s[j] < 'a' || s[j] > 'z') && (s[j] < '0' || s[j] > '9')) {
      j--;
      continue;
    }
        
    if (s[i] !== s[j]) {
      return false;
    }
        
    i++;
    j--;
  }

  return true;
    
};
