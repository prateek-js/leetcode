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


var twoSum = function (nums, target) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

var result = twoSum([1,4,5,6,8,9,2], 10);
console.log(result)
