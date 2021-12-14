/**
 * @param {string} columnTitle
 * @return {number}
 */

var titleToNumber = function(columnTitle) {
    
    var res = 0;
    var num = 0;
    var len = columnTitle.length;
    
    for (var i = 0; i < len; i++) {
    num = getNum(columnTitle[len - 1 - i]);
    res += Math.pow(26, i) * num;
  }
  return res;
};

var getNum = function (char) {
    
    var start = 'A'.charCodeAt(0) - 1;
    return char.charCodeAt(0) - start;
    
};
