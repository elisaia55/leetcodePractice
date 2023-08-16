/**
 * @param {character[][]} grid
 * @return {number}
 */


// iterate over the adjacency matrix from rows/ col 
// counter for each visited island that are connected 
// after we check neighbors of visited islands to show for islands that are connected (top, bottom, left , right)
// we return the counter of islands once fully traversed. (dfs- recursion)


function numIslands(grid) {
   let islandCounter = 0;
    
    for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === "1") {
            islandCounter++;
            exploreIslands(row, col, grid)
        }
    }
    }
    return islandCounter
    
}

function exploreIslands(row, col, grid) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === "0") {
        return
    }
    grid[row][col] = "0"
    
    exploreIslands(row + 1, col, grid);
    exploreIslands(row - 1, col, grid);
    exploreIslands(row, col + 1, grid);
    exploreIslands(row, col - 1, grid)
}






















/* island counter
    // iterate over rows, cols
    // dfs helper func to show visited 
  let islandCount = 0;
    for (let row = 0; row < grid.length; row++)
    for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === "1") {
            islandCount++;
            exploreIslands(row, col, grid)
        }
    }
    return islandCount
  
}

function exploreIslands(row, col, grid) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === "0") {
        return 
    }
    
    grid[row][col] = "0"
    
    exploreIslands(row, col + 1, grid)
    exploreIslands(row, col - 1, grid)
    exploreIslands(row + 1, col, grid)
    exploreIslands(row - 1, col, grid)
   */
