/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let memo = new Array(s.length + 1);
    memo[s.length] = [''];
    return verifyStr(s,wordDict,0,memo);
    
};

function verifyStr(word, dict, start, memo) {
    // let result = memo[start];
    if(memo[start] !== undefined) return memo[start];
    let result = [];
    for(let word1 of dict) {
        if(!word.startsWith(word1, start)) {
            continue;
        }
        let prefix = verifyStr(word, dict, start+word1.length, memo);
        for (let subP of prefix) {
            result.push(word1 + (subP.length > 0 ? ' ' : '') + subP);
        }
    }
    memo[start] = result;
    return result;
}


Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
