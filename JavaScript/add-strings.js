/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function(num1, num2) {
  
    var len1 = num1.length;
    var len2 = num2.length;
    var max = Math.max(len1, len2);
    var res = Array(max);
    var carry = 0;
    var val = 0;

    for (var i = 0; i < max; i++) {
        val = Number(num1[len1 - 1 - i] || 0) + Number(num2[len2 - 1 - i] || 0) + carry;
        carry = Math.floor(val / 10);
        res[max - 1 - i] = val % 10;
    }

    return (carry || '') + res.join(''); 
    
};
