/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

// 1 liner
const kClosest = (points, K) => {
    return points.sort((a, b) => Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2)) - Math.sqrt(Math.pow(b[0], 2) + Math.pow(b[1], 2))).slice(0, K);
};


var kClosest = function(points, K) {
    
    var swap = (p1,p2) => {
        [points[p1],points[p2]] = [points[p2],points[p1]];
    }
    
    var dist = point => point[0] ** 2 + point[1] ** 2;
    
    var partition = function(lo,hi) {
        const pivotDist = dist(points[hi]);
        let searchIndex = lo;
        let targetIndex = lo;
        
        while (searchIndex < hi) {
            const distance = dist(points[searchIndex]);
            if (distance <= pivotDist) {
                swap(searchIndex, targetIndex);
                targetIndex += 1;
            }
            searchIndex += 1;
        }
	    // hi goes to target pivot
        swap(hi, targetIndex);
        return targetIndex;
    }
    
    var quicksort = function(lo, hi, target) {
        const pivot = partition(lo, hi);
        if (pivot === target - 1) return;
        if (pivot < target - 1) {
          quicksort(pivot + 1, hi, target);
        } else {
          quicksort(lo, pivot - 1, target);
        }
        
    }
    
    quicksort(0, points.length - 1, K);
    return points.slice(0, K);
};
