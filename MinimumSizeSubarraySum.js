var minSubArrayLen = function(s, nums) {
    let n = nums.length;
    let ans = Infinity;
    let left = 0;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        while (sum >= s) {
            ans = Math.min(ans, i + 1 - left);
            sum -= nums[left++];
        }
    }
    return (ans != Infinity) ? ans : 0;
};


Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
