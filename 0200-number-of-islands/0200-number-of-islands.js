/**
 * @param {character[][]} grid
 * @return {number}
 */





function numIslands(grid) {
    islandCounter = 0;
    for (let row = 0; row < grid.length; row++)
    for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === "1") {
            islandCounter++;
            dfs(row, col, grid)
        }
    }
    return islandCounter
}
   
function dfs(row, col, grid) {
    if ( row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === "0") {
        return
    }
    
    grid[row][col] = "0"
    
    dfs(row, col + 1, grid)
    dfs(row, col - 1, grid)
    dfs(row + 1, col, grid)
    dfs(row - 1, col, grid)
   
}
