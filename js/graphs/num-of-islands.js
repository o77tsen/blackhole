// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;

    function dfs(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0") {
            return;
        }
        
        grid[i][j] = "0";

        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                count += 1;
                dfs(grid, i, j);
            }
        }
    }

    return count;
};

/**
 * --- Notes ---
 * Time Complexity - O(rows * cols)
 * Space Complexity - O(rows * cols)
 * 
 * the function calculates the number of islands in the grid
 * utilises DFS algorithm to traverse and mark all connected cells of each island as visited
 * main function iterates through each cell in the grid and if cell contains an island,
 * increments the count of islands and performs DFS to visit all cells connected to current island
 */