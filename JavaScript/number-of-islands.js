/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    const gridLength = grid.length
    const rowLength = grid[0].length
    let count = 0

    // Loop through every cell in the grid
    
    for(let i = 0; i < gridLength; i++){
        for(let j = 0; j < rowLength; j++) {
            
            // When we hit land we know we are on an island
            // We will use this cell to visit all the 1's connected to it
            // Once we've visited all the 1's connected to this cell then we increase the count
            
            if(grid[i][j]==="1") {
                dfs(i, j)
                count++
            }
        }
    }

    // DFS search
    // Look in all directions and set the current cell to 0 to prevent this cell from being visited again
    
    function dfs(i,j) {
        if(grid[i][j] ==="1") {
            grid[i][j] = '0'
            
            // look north
            
            if(i - 1 >= 0) dfs(i-1,j)
            
            // look east
            
            if(j + 1 < rowLength) dfs(i,j+1)
            
            // look south
            
            if(i + 1 < gridLength) dfs(i+1,j)
            
            // look west
            
            if(j - 1 >= 0) dfs(i,j-1)
        }
    }

    return count
};
