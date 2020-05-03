/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var arr = new Array(27).fill(0);
    for(let i = 0; i < magazine.length; i++) {
        let unicode = magazine.charCodeAt(i)-97;
        arr[unicode] = arr[unicode]+1;
    }
    for(let j = 0; j<ransomNote.length; j++) {
        let unicode = ransomNote.charCodeAt(j) - 97;
        arr[unicode] = arr[unicode]-1;
        if (arr[unicode] < 0) return false; 
    }
    return true;
};


canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
