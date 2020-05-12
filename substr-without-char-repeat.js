var lengthOfLongestSubstring = function(s) {
    let hashMap = {}, start = 0, max = 0;
    for (let i=0;i<s.length;i++) {
        if (hashMap[s[i]]!=null) {
            if (hashMap[s[i]] + 1 > start) { // if the character is after start
                start = hashMap[s[i]] + 1; // update start position
            }
        }
        hashMap[s[i]] = i; // update char position
        max = (i-start+1)>max?(i-start+1):max; // update max if neccessary
    }
    return max;
};
