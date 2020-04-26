var moveZeroes = function(nums) {
    let count = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) 
        if (nums[i] != 0) 
            nums[count++] = nums[i]; // here count is  
                                   // incremented 
  
    // Now all non-zero elements have been shifted to  
    // front and  'count' is set as index of first 0.  
    // Make all elements 0 from count to end. 
    for (let j = count; j < len; j++) {
        nums[j] = 0;
    }
}
