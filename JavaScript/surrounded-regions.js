/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solve = function(board) {
    
var xLen = board.length;

var yLen = (board[0] || []).length;
  
    for (var i = 0; i < xLen; i++) {
    dfs(board, i, 0, xLen, yLen);
    dfs(board, i, yLen - 1, xLen, yLen);
  }
  for (var j = 0; j < yLen; j++) {
    dfs(board, 0, j, xLen, yLen);
    dfs(board, xLen - 1, j, xLen, yLen);
  }
  for (var m = 0; m < xLen; m++) {
    for (var n = 0; n < yLen; n++) {
      if (board[m][n] === '-') board[m][n] = 'O';
      else if (board[m][n] === 'O') board[m][n] = 'X';
    }
  }
};

var dfs = function (board, x, y, xLen, yLen) {
  
    if (x >= 0 && y >= 0 && x < xLen && y < yLen && board[x][y] === 'O') {
    board[x][y] = '-';
    dfs(board, x + 1, y, xLen, yLen);
    dfs(board, x - 1, y, xLen, yLen);
    dfs(board, x, y + 1, xLen, yLen);
    dfs(board, x, y - 1, xLen, yLen);
  }
    
};
