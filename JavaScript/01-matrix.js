/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

var updateMatrix = function(mat) {
    let m = mat.length; // row length
    let n = mat[0].length; // column length
    
    queue = [] // storing 0 value index
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                queue.push([i, j]);
            }
            else {
                mat[i][j] = Number.MAX_SAFE_INTEGER;
            }
        }
    }
    
    dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let level = 0;
    while (queue.length > 0) {
        // rowColIndex[0] --> row index
        // rowColIndex[1] --> col index
        level++;
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            rowColIndex = queue.shift();
            for (let j = 0; j < dirs.length; j++) {
                let row = rowColIndex[0] + dirs[j][0];
                let col = rowColIndex[1] + dirs[j][1];
                if (row < 0 || row >= m || col < 0 || col >= n || mat[row][col] != Number.MAX_SAFE_INTEGER){
                    continue;
                }
                queue.push([row, col]);
                mat[row][col] = level;
            }
        }
    }
    
    return mat;
};
