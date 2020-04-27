/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  let sum = 0;
    const cmp = (a, b) => b-a;
    nums.sort(cmp);
  for (let i = 0; i < nums.length; ++i) sum+=nums[i];
  let part = sum/k;
  for (let i = 0; i < nums.length; ++i) if (nums[i] > part) return false;
  if (sum % k !== 0 || nums.length < k ) return false;
  let used = Array.from({length:nums.length}, x=>false);
  let left = nums.length;
  const dfs = (target, start) => {
    if (left === 0) return true;
    if (target === 0) return dfs(part, 0);
    for(let i = start; i < nums.length; ++i) {
      if (!used[i] && nums[i] <= target) {
        used[i] = true;
        left -= 1;
        if (dfs(target - nums[i], i + 1)) return true;
        used[i] = false;
        left += 1;
      }
    }
    return false;
  };
  return dfs(part, 0);
};

Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
Output: True
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
