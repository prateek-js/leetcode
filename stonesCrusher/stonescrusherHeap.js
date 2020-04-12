var lastStoneWeight = function(stones) {
    for (let i = Math.floor(stones.length/2 - 1); i >= 0; i--) {
        heapify(stones, i);
    }
    while (stones.length > 1) {
        const y = stones[0];
        stones[0] = stones[stones.length - 1];
        stones.length--;
        heapify(stones, 0);
        const x = stones[0];
        if (x === y) {
            stones[0] = stones[stones.length - 1];
            stones.length--;
            heapify(stones, 0);
        } else {
            stones[0] = y - x;
            heapify(stones, 0);
        }
    }
    return stones[0] || 0;
    
    function heapify(arr, i) {
        const length = arr.length;
        let largest = i;
        let left = i*2 + 1;
        let right = i*2 + 2;
        if (left < length && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < length && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, largest);
        }
    }
};
