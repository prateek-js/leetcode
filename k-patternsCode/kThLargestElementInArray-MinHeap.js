var findKthLargest = function(nums, k) {
  function siftdown (array, index, length) {
    for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
      if (i + 1 < length && array[i + 1] < array[i]) {
        i++;
      }
      if (array[index] <= [array[i]]) {
        break;
      } else {
        [array[index], array[i]] = [array[i], array[index]];
        index = i;
      }
    }
  }

  function buildMinHeap(arr, length) {
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
      siftdown (arr, i, length);
    }
  }

  buildMinHeap(nums, k)
  for(let i=k;i<nums.length;i++) {
    if(nums[i] > nums[0]) {
      [nums[0], nums[i]] = [nums[i], nums[0]];
      siftdown (nums, 0, k)
    }
  }

  return nums[0]
};

Input: [3,2,1,5,6,4] and k = 2
Output: 5
