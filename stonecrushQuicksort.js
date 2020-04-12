function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}



var lastStoneWeight = function(stones) {
    var stones = quickSort(stones);
    while (stones.length > 0) {
        let x = stones.length-2;
        let y = stones.length-1;
        
        if (stones.length === 1 ) {
            return stones[0]
        }
        if (stones.length === 2 ) {
            return stones[y]-stones[x]
        }
        else if (stones[y] - stones[x] > 0) {
            let i = x-1;
            let inserted = false;
            let smashResult = stones[y]-stones[x]
            while (inserted === false && i >= 0) {
                if (smashResult >= stones[i]) {
                    stones.splice(i+1, 0, smashResult);
                    inserted = true;
                } else {
                    if (i === 0) {
                    stones.unshift(smashResult)
                }
                i--;
                }
            }
        }
        stones.pop()
        stones.pop();
    }    
    return 0;
};
