/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {};
    nums.forEach(num => {
        if(map[num]) {
            map[num] += 1;
        } else {
            map[num] = 1;
        }
    });
    
    // from data structure point of view its good to implement priority queue concept where less frequent is first;
    
    // PriorityQueue<Integer> heap = new PriorityQueue<Integer>((n1, n2) -> count.get(n1) - count.get(n2));
    
    // keep k top frequent elements in the heap
    // for (int n: count.keySet()) {
    //   heap.add(n);
    //   if (heap.size() > k)
    //     heap.poll();
    // }
    
    var sortable = [];
    for (var entry in map) {
        sortable.push([entry, map[entry]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    return sortable.map(item => item[0])
        .slice(0, k);

};


Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
