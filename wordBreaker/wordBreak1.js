/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    return verifyStr(s,wordDict,0,[])
};

function verifyStr(word, dict, start, memo) {
    if(start === word.length) return true;
    if(memo[start] !== undefined) return memo[start];
    for(let i=start+1; i<=word.length; i++) {
        let prefix = word.substring(start, i);
        if(dict.includes(prefix) && verifyStr(word, dict, i, memo)) {
            return memo[start] = true;
        }
    }
    return memo[start] = false;
}

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
