/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
  var n = matrix.length;
  var n2 = Math.floor(n / 2);
    
  // 1 2 3     7 8 9
  // 4 5 6  => 4 5 6
  // 7 8 9     1 2 3
    
  for (var i = 0; i < n2; i++) {
    for (var j = 0; j < n; j++) {
      swap(matrix, i, j, n - 1 - i, j);
    }
  }
    
  // 7 8 9     7 4 1
  // 4 5 6  => 8 5 2
  // 1 2 3     9 6 3
    
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      swap(matrix, i, j, j, i);
    }
  }
};

var swap = function (matrix, x1, y1, x2, y2) {
  var tmp = matrix[x1][y1];
  matrix[x1][y1] = matrix[x2][y2];
  matrix[x2][y2] = tmp;
};
