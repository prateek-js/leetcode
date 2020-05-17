var findAnagrams = function(s, p) {

let sLen = s.length;
let pLen = p.length;
if(pLen > sLen) return []; 

let sCount = new Array(26).fill(0);
let pCount = new Array(26).fill(0);

function isEqual(){
    for(let i=0; i<26; i++){
        if(sCount[i]!==pCount[i]) return false;
    }
    return true;
}

//fill pCount (reference array)
for(let i=0; i<pLen; i++){
    let index = p.charCodeAt(i) - 97 //ascii integer for letter a is 97
    pCount[index] += 1;
}

let result = [];

for(let i=0; i<sLen; i++){
    //add count for letters in the window of p length
    let index = s.charCodeAt(i) - 97;
    sCount[index] += 1;
    
    //remove count of leftmost letter after window of pLen
    if(i >= pLen) {
        let idx = s.charCodeAt(i - pLen) - 97;
        sCount[idx] -= 1;
    }
    
    //compare arrays in sliding window to reference array (sCount == pCount)
    if(isEqual()){
        result.push(i - pLen + 1); // add index of first element in anagram window
    }
}

return result;
};


Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
