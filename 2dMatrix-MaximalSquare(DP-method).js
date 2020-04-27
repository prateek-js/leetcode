function maximalSquare(matrix) {
    // max square we've seen
    let max = 0;
	
    // create empty dp array matching matrix size
    const dp = [
        ...Array(matrix.length),
    ].map((e) => Array(matrix[0].length));
	
    // iterate i by j thru matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            // check if this is first row, or col
            if (i === 0 || j === 0) {
                // check if it's a 1 to update max square to 1
                if (matrix[i][j] === '1') {
                    dp[i][j] = 1;
                    max = Math.max(max, 1);
                }
                else {
                    // just write a 0 to dp
                    dp[i][j] = 0;
                }
            } else {
                // check if 1
                if (matrix[i][j] === '1') {
                    // number at this dp cell, is min of left, top, top left + 1
                    // this ensures, will only be a square if all of those are 1s
                    dp[i][j] =
                        Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
                    // update max if necessary
                    max = Math.max(max, dp[i][j]);
                }
                else {
                    // just write a 0 to dp
                    dp[i][j] = 0;
                }
            }
        }
    }
	
    // return max squared (cuz its a square :))
    return max ** 2;
}


Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
