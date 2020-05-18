Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var getFreqMap = function(s) {
    let freqMap = {}
    for(let ch of s) {
        
        if(freqMap[ch] === undefined)
            freqMap[ch] = 1;
        else
            freqMap[ch] += 1;
        
    } 
    
    return freqMap;
}

var isEqual = function(obj1, obj2) {
    
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    if(keys1.length < keys2.length) return false;
    
    for(var k of keys1) 
        if(obj1[k] !== obj2[k]) return false;
    
    return true;
    
} 

var checkInclusion = function(s1, s2) {
    let freqMap = getFreqMap(s1);
    let stateMap = getFreqMap(s2.slice(0, s1.length - 1));
    
    for(let i = s1.length - 1; i < s2.length; i++) {
        
        let inChar = s2[i];
        let outChar = s2[i - s1.length + 1];
        
        if(stateMap[inChar] === undefined) stateMap[inChar] = 1;
        else stateMap[inChar] += 1;
        
        if(isEqual(freqMap, stateMap)) return true;
        
        stateMap[outChar] -= 1;
        if(stateMap[outChar] === 0) delete stateMap[outChar];
    }
    
    return false;
};
