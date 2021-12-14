/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {

    let rowHasZero = [];
    let colHasZero = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rowHasZero.push(i);
                colHasZero.push(j);
            }
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rowHasZero.includes(i) || colHasZero.includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    
};
