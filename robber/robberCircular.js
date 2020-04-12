var rob = function(nums) {
    if(nums.length === 1){
        return nums[0]
    } else if(nums.length === 0){
        return 0
    } else if(nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    
    return Math.max(
        checkRob(nums, 1, nums.length - 1), 
        checkRob(nums, 0, nums.length - 2)
    );
}

var checkRob = function(nums, start, end) {
    let sorter = []
    sorter[0] = nums[start]
    sorter[1] = Math.max(nums[start], nums[start+1])
    for(let i = start+2; i <= end; i++){
        let optionA = sorter[0];
        let optionB = sorter[1];    
        let currentHouse = nums[i];
        sorter[0] = optionB;
        sorter[1] = Math.max(optionA + currentHouse, optionB);
    }
    
    return sorter[1];
}
