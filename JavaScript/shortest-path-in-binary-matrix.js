/**
 * @param {number[][]} grid
 * @return {number}
 */

var shortestPathBinaryMatrix = function(grid) {

    let n = grid.length - 1;
    let q = [0];
    
    if (grid[0][0] || grid[n][n]) 
        return -1;
    grid[0][0] = 1;
    
    while (q.length) {
        let curr = q.shift(), i = curr & (1 << 7) - 1, j = curr >> 7
        if (i === n && j === n) 
            return grid[n][n]
        for (let a = Math.max(i-1,0); a <= Math.min(i+1,n); a++)
            for (let b = Math.max(j-1,0); b <= Math.min(j+1,n); b++)
                if (grid[a][b] === 0)
                    grid[a][b] = grid[i][j] + 1, q.push(a + (b << 7))
    }
    
    return -1;
    
};
