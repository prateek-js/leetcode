var majorityElement = function(nums) {
    let pivot = Math.ceil(nums.length/2);
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] += 1 : map[nums[i]] = 1;
        if(map[nums[i]] >= pivot ) {
            return nums[i];
        }
    }
};


Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
