/**
 * @param {number[]} nums
 */
var map = {};
var queueNumber = [];
var FirstUnique = function(nums) {
    map  = {};
    queueNumber = [];
    nums.forEach(num => {
        this.add(num)
    });
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    let uniqFirst = queueNumber.slice(0, 1);
    if ( map[uniqFirst] === 1) {
      //console.log(uniqFirst);
        return uniqFirst;
    } else if(map[uniqFirst] > 1) {
        return getNextUnique(map, 1);
        // console.log(res);
    } else {
      //console.log("-1");
        return -1;
    }
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if(map[value]) {
      map[value] += 1;
    } else {
      map[value] = 1;
      queueNumber.push(value);
    }
};

var getNextUnique = function(map, start) {
    while (start <= queueNumber.length ) {
        if(map[queueNumber[start]] > 1) {
            start++;
        } else if(map[queueNumber[start]] === 1){
            return queueNumber[start];
        } else {
          return -1;
        }
    }
}
/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
 
 Input: 
["FirstUnique","showFirstUnique","add","showFirstUnique"]
[[[809]],[],[809],[]]
Output: 
[null,809,null,-1]

Explanation: 
FirstUnique firstUnique = new FirstUnique([809]);
firstUnique.showFirstUnique(); // return 809
firstUnique.add(809);          // the queue is now [809,809]
firstUnique.showFirstUnique(); // return -1
