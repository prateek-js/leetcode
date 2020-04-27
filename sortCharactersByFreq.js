/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    
    for(let char of s) {
        if(map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    
    return [...map]
        .sort((a, b) => b[1] - a[1])
        .map(entry => {
            let arr = [];
            for(let i = 0; i < entry[1]; ++i) {
                arr.push(entry[0]);
            }
            return arr.join('');
        })
        .join('')
};  

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
