/**
 * @param {number} n
 * @return {number[]}
 */

var grayCode = function(n) {

    var res = [0];
    helper(n, res, 0);
    return res;
};

var helper = function (n, res, num) {
  if (num >= n) 
      return;
  var len = res.length;
  for (var i = len - 1; i >= 0; i--) {
    res.push(res[i] + len);
  }
    
  helper(n, res, num + 1);
    
};
