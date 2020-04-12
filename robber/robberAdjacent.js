var rob = function(nums) {
    if(nums.length === 1){
        return nums[0]
    } else if(nums.length === 0){
        return 0
    }
    
    let sorter = []
    sorter[0] = nums[0]
    sorter[1] = Math.max(nums[1], nums[0])
    for(let i = 2; i < nums.length; i++){
        let optionA = sorter[0]
        let optionB = sorter[1]     
        let currentHouse = nums[i]
        
        sorter[0] = optionB;
        sorter[1] = Math.max(optionA + currentHouse, optionB)
    }
    
    return sorter[1];
}
