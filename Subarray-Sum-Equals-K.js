var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let map = {0: 1};
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map[sum - k]) {
            count += map[sum - k];
        }
        map[sum] = map[sum] ? map[sum] + 1 : 1;
    }
    return count;
    
};


Input:nums = [1,1,1], k = 2
Output: 2
