var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            map.set(diff, i);
        }
    }
};
