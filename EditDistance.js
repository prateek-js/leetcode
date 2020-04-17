/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  
  const [row, col] = [word1.length + 1, word2.length + 1];
    const memo = new Array(row).fill().map(() => new Array(col).fill(-1));
    
    const getEditDistance = (str1, str2, i, j, memo) => {
        // return memorized value right away if edit distance 
        // has been calculated
        if (memo[i][j] > -1) {
            return memo[i][j];
        }
        
        if (i === 0) {
            memo[i][j] = j;
            return j;
        }
        if (j === 0) {
            memo[i][j] = i;
            return i;
        }
        if (str1[i - 1] === str2[j - 1]) {
            memo[i][j] = getEditDistance(str1, str2, i - 1, j - 1, memo);
            return memo[i][j]
        }
        memo[i][j] = Math.min(
            1 + getEditDistance(str1, str2, i - 1, j - 1, memo),
            1 + getEditDistance(str1, str2, i, j - 1, memo),
            1 + getEditDistance(str1, str2, i - 1, j, memo)
        ) ;
        return memo[i][j];
    }
    
    return getEditDistance(word1, word2, word1.length, word2.length, memo)
};


minDistance("horse","ros")
//output - 3
