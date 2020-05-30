const uniquePaths = (m, n) => {
    const memo = new Array(m + 1).fill(0);
    for(let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n + 1).fill(-1);
    }
    return helper(m, n, 1, 1, memo);
};

const helper = (m, n, row, col, memo) => {
    if(row === m && col === n) return 1;
    if(row > m || col > n) return 0;
    
    if(memo[row][col] === -1) {
    
        const pathsRight = helper(m, n, row, col + 1, memo);
        const pathsDown = helper(m, n, row + 1, col, memo);

        memo[row][col] = pathsRight + pathsDown;
    }
    
    return memo[row][col];
};


Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
