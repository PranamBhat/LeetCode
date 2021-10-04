/**
 * @param {number[][]} matrix
 */

var NumMatrix = function(matrix) {

  const sum = (i, j) => {
    let top = 0
    let left = 0
    let topLeft = 0
    if (matrix[i - 1] && matrix[i - 1][j] !== undefined) {
      top = matrix[i - 1][j]
    }
    if (matrix[i - 1] && matrix[i - 1][j - 1] !== undefined) {
      topLeft = matrix[i - 1][j - 1]
    }
    if (matrix[i][j - 1] !== undefined) {
      left = matrix[i][j - 1]
    }
    return matrix[i][j] + left + top - topLeft
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = sum(i, j)
    }
  }
  this.dp = matrix
}

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  const get = (row, column) => {
    if (row < 0 || column < 0) {
      return 0
    }
    return this.dp[row][column]
  }
  return get(row2, col2) - get(row1 - 1, col2) - get(row2, col1 - 1) + get(row1 - 1, col1 - 1)
}
