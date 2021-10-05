/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function(path) {
  var arr = path.split('/');
  var stack = [];
  var len = arr.length;
  var item = '';
  for (var i = 0; i < len; i++) {
    item = arr[i];
    if (item === '' || item === '.') continue;
    if (item === '..') {
      stack.pop();
    } else {
      stack.push(item);
    }
  }
  return '/' + stack.join('/');
};
