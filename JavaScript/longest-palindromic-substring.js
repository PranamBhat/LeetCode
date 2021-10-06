/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  var start = 0;
  var end = 0;
  var len = s.length;
  var num = 0;
  for (var i = 0; i < len; i++) {
    num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
    if (num > end - start) {
      start = i - Math.floor((num - 1) / 2);
      end = i + Math.floor(num / 2);
    }
  }
  return s.slice(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
  var l = left;
  var r = right;
  var len = s.length;
  while (l >= 0 && r < len && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1;
};
