/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const partitions = [];
    var memo = new Map();
    if (isPalindrome(s,0,s.length-1)) return 0;
    return dfs(s, 0, memo);
};
var isPalindrome = function(s, start, end) {
        while (start < end) {
            if (s.charAt(start++) != s.charAt(end--)) {
                return false;
            }
        }
        return true;
}

var dfs = function(str, index, memo) {
    if(index >= str.length || isPalindrome(str, index, str.length-1)) {
        return 0;
    }
    if(memo.has(index)) {
        return memo.get(index);
    } 
    
    let result = Infinity;
    for(let i = index+1; i <= str.length; i++) {
        if( i != str.length && isPalindrome(str, index, i-1)) {
           result = Math.min(result, 1+dfs(str,i, memo));
        }
    }
    result = (result === Infinity) ? 0 : result;
    memo.set(index, result);
    return result;
}

Input: "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
