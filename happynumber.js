var isHappy = function(n) {
    let num = n;
    counter = 0;
    while(counter<8) {
        num = numSquare(num);
        counter++
    }
    return (num===1) ? true : false;
};

var numSquare = function(num) {
    let sumSquare = 0;
    while(num!=0) {
        sumSquare += Math.pow(num%10,2);
        num = Math.floor(num/10);
    }
    return sumSquare;
}
