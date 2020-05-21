Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.


/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const dp = Array.from({ length: matrix.length+1}, () => [0]);
    dp[0] = new Array(matrix[0].length+1).fill(0);
    let counter = 0;
    
    for(let i = 0 ; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) dp[i+1][j+1] = 0;
            else {
                const top = dp[i][j+1];
                const left = dp[i+1][j];
                const diagonal = dp[i][j];
                const value = Math.min(top, left, diagonal) + 1;
                dp[i+1][j+1] = value;
                counter += value;
            }
        }
    }
    return counter;
};
