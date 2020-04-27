var canPartition = function(nums) {
    let sum = nums.reduce((acc, val) => acc + val, 0)
    if (sum % 2)
        return false
    sum /= 2
    let dp = new Array(nums.length + 1).fill(0).map(val => new Array(sum + 1).fill(false))
    //dp[0][j] = false, dp[i][0]=true
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = true
    }
    for (let i = 1; i <= nums.length; i++) {
        for (let j = 1; j <= sum; j++) {
            if (j < nums[i - 1])
                dp[i][j] = dp[i - 1][j]
            else {
                dp[i][j] = (dp[i - 1][j] || dp[i - 1][j - nums[i - 1]])
            }
        }
    }
    return dp[nums.length][sum]
};

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
