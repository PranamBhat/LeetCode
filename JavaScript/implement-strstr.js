/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
  
    var len1 = haystack.length;
    var len2 = needle.length;
  
    if (!len2) 
        return 0;
    
    for (var i = 0; i < len1; i++) {
    for (var j = 0; j < len2; j++) {
      if (i + j === len1) 
          return -1;
      if (haystack[i + j] !== needle[j]) 
          break;
      if (j === len2 - 1) 
          return i;
    }
  }
  
    return -1;
    
};
