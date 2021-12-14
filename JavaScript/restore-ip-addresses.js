/**
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function(s) {

    var res = [];
    helper(s, 0, [], res);
    return res;
};

var helper = function (s, start, now, res) {
  var str = '';
  var num = 0;

  if (now.length === 4) {
    if (start === s.length) 
        res.push(now.join('.'));
    return;
  }

  for (var i = 1; i <= 3; i++) {
    str = s.substr(start, i);
    if (str.length === 1 || str[0] !== '0') {
      num = Number(str);
      if (0 <= num && num <= 255) {
        now.push(num);
        helper(s, start + i, now, res);
        now.pop();
      }
    }
  }
    
};
