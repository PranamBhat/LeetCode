/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function(num1, num2) {

  var len1 = num1.length;
  var len2 = num2.length;
  var res = Array(len1 + len2).fill(0);
  var carry = 0;
  var val = 0;
  var index = 0;

  for (var i = len1 - 1; i >= 0; i--) {
    carry = 0;
    for (var j = len2 - 1; j >= 0; j--) {
      index = len1 + len2 - 2 - i - j;
      val= (num1[i] * num2[j]) + carry + res[index];
      carry = Math.floor(val / 10);
      res[index] = val % 10;
    }
    if (carry) res[index + 1] = carry;
  }

  while (res.length > 1 && res[res.length - 1] === 0) res.pop();

  return res.reverse().join('');
    
};
