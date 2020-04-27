var removeKdigits = function(num, k) {
    if (num.length <= k) return "0";
    let stack = [];
    let i = 0;
    while(i < num.length) {
        while(k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
        i++
    }
    let resStr = '';
    while(k) {
        stack.pop();
        k--;
    }
    while(stack.length > 1 && stack[0] === '0') {
        stack.shift();
    }
    while(stack.length > 0) {
        let n = stack.pop();
        resStr = `${n}${resStr}`;
    }
    return resStr;
};

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
