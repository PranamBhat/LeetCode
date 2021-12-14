/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {

    var str = '1';
    var tmp = '';
    var last = '';
    var count = 0;
    var len = 0;

  for (var i = 1; i < n; i++) {
    tmp = '';
    last = '';
    count = 0;
    len = str.length;

    for (var j = 0; j < len; j++) {
      if (last === '') {
        last = str[j];
        count = 1;
        continue;
      }
      if (str[j] === last) {
        count += 1;
      } else {
        tmp += '' + count + last;
        last = str[j];
        count = 1;
      }
    }

    if (last) {
      tmp += '' + count + last;
    }

    str = tmp;
  }

  return str;
    
};
