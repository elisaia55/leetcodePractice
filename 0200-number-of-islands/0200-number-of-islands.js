/**
 * @param {character[][]} grid
 * @return {number}
 */





function numIslands(grid) {
    // counts # of islands
    let islandCounter = 0;
    
    // iterate over each cell in adjacency matrix
    for ( let row = 0; row < grid.length; row++)
    for ( let col = 0; col <grid[row].length; col++) {
        if (grid[row][col] === '1') {
            islandCounter++;
            dfs(row, col, grid);
        }
    }
    return islandCounter
}

// helper "depth first search" func to show visited islands; if visited change cell to "0"
function dfs(row, col, grid) {
    
    // base case to check if out of bounds, 
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === "0") {
        return 
    }
    // if in bounds, lets visit each cell 
    grid[row][col] = "0"
    
    // right of visited 
    dfs(row, col + 1, grid)
    // left of visited 
    dfs(row, col - 1, grid)    
    // top of visited 
    dfs(row + 1, col, grid)
    // bottom of visited 
    dfs(row -1, col, grid)
}
