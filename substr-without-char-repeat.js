var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    if (s.length < 2) return s.length;
    let ls = s[0]; // longest string
    let cs = s[0]; // current string
    for (var i = 1; i < s.length; i++) {
        var index = cs.indexOf(s[i]); // get index of current character in current string
        if (index > -1) { // found the character in current string
            if (cs.length > ls.length) {
                ls = cs; // update longest string
            }
            cs = cs.substring(index + 1,cs.length) + s[i]; // remove the first part of the string which contains repeated character
        } else {
            cs = cs + s[i]; 
        }        
    }
    if (cs.length > ls.length) {
        ls = cs;                
    }
    return ls.length;
};
