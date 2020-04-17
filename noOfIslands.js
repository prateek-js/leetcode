/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const height = grid.length;
    const width = height > 0 ? grid[0].length : 0;

  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      if (grid[y][x] === '1') {
        count++;
        dfs(x, y);
      }
    }
  }

  return count;

  function dfs(x, y) {
    if (x >= width || x < 0) return;
    if (y >= height || y < 0) return;
    if (grid[y][x] !== '1') return;
    grid[y][x] = 0;
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }
};


Input:
11110
11010
11000
00000

Output: 1
