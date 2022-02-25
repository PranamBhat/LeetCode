/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    var str = s.trim();
    var len = str.length;
    var i = len - 1;
    while (i >= 0 && str[i] !== ' ') 
        i--;
    return len - 1 - i;
    
};
