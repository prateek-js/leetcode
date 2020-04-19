/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let hash = {};
    let counter = 0;
    nums.forEach(n=>{
        hash[n] ? hash[n] += 1 : hash[n] = 1;
    });
    
    let numArr = new Set(nums);
    
    numArr.forEach( n => {
        let key = n+k;
        if(k === 0 && hash[key] > 1){
            counter++
        } else if(k > 0 && hash[key] > 0){
            counter++
        }   
    });
    return counter;
};


[3,1,4,1,5]
2
