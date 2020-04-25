/**
 * @param {number[]} nums
 * @return {number}
 */
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
