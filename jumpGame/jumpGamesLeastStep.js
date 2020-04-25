/**
 * @param {number[]} nums
 * @return {number}
 */
//O(n*n)
var jump = function(nums) {
    let post = nums.length - 1;
    let steps = 0;
    while(post != 0 ) {
        for(let i = 0; i < post ; i++) {
            if(nums[i] >= post-i) {
                post = i;
                steps++;
                break;
            }
        }
    }
    return steps;
};

// O(n)
var jump = function(nums) {
    let ladder = nums[0];
    let stairs = nums[0];
    let jumps = 1;
       for(let i = 1 ; i < nums.length; i++) {
            if(i == nums.length-1) return jumps;
            if(i + nums[i] > ladder) {
                ladder = i + nums[i];
            }
            stairs--;
            if(stairs == 0) {
                jumps++;
                stairs = ladder - i;
            }
        }
        return 0;
};
