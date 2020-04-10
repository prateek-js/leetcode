var myAtoi = function(str) {
    str = str.trim();
    if ((/^[a-z]/.test(str))) {
        return 0;
    }
    let res = parseInt(str, 10) || 0;
    
    if (res < (Math.pow(2, 31) * -1)) {
        return Math.pow(2, 31) * -1
    } else if (res > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    } else 
        return res
};
