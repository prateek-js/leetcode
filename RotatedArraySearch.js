/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    pivot = 0;
    while (low <= high) {
        pivot = Math.floor((low+high)/2);
        if(nums[pivot+1] < nums[pivot]) {
            break;
        }
        if(nums[pivot] < nums[low]) {
            high = pivot-1; 
        } else {
            low = pivot+1
        }
    }
    const a = binarySearch(0, pivot), b = binarySearch(pivot + 1, nums.length);
    return 0 <= a ? a : b;
    
    function binarySearch(low, high) {
        while (low < high) {
            const mid = Math.floor((low+high)/2);
             if (nums[mid] === target) {
                return mid;
            }
            if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return nums[high] === target ? high : -1;
    }
};

//input nums - [4,5,6,7,0,1,2] ; target :- 0
