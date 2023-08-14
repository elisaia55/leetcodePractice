/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }
  
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(grid, i, j, m, n);
      }
    }
  }
  
  return count;
}

function dfs(grid, i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
    return;
  }

  // Mark the current cell as visited
  grid[i][j] = '0';

  // Visit the neighboring cells in up, down, left, and right directions
  dfs(grid, i - 1, j, m, n);
  dfs(grid, i + 1, j, m, n);
  dfs(grid, i, j - 1, m, n);
  dfs(grid, i, j + 1, m, n);
}