/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    if (s.length === 0)
        return s;
    let right_shift = 0;
    let left_shift = 0;
    let result = "";
    for (let i=0; i< shift.length; i++) {
        if(shift[i][0] === 0){
            left_shift += shift[i][1];
        } else {
            right_shift += shift[i][1];
        }
    }
        if (left_shift > right_shift) {
            left_shift = left_shift - right_shift;
            left_shift = left_shift%s.length;
            result += s.substr(left_shift, s.length - left_shift);
            result += s.substr(0, left_shift);
        } else {
            right_shift = right_shift - left_shift;
            right_shift = right_shift%s.length;
            result += s.substr(s.length - right_shift, right_shift);
            result += s.substr(0, s.length - right_shift);
        }
        return result;
};


Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"
