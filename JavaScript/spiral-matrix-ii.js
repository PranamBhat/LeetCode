/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function(n) {

  var x1 = 0;
  var x2 = n - 1;
  var y1 = 0;
  var y2 = n - 1;
  var i = 0;
  var res = Array(n).fill(0).map(_ => Array(n));
    
  while (x1 <= x2 && y1 <= y2) {
    for (var x = x1; x <= x2; x++) 
        res[y1][x] = ++i;
    for (var y = y1 + 1; y <= y2; y++) 
        res[y][x2] = ++i;
    for (var x = x2 - 1; x > x1; x--) 
        res[y2][x] = ++i;
    for (var y = y2; y > y1; y--) 
        res[y][x1] = ++i;
    
      x1++;
      x2--;
      y1++;
      y2--;
      
  }
    
  return res;
    
};
