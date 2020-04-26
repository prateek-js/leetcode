/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
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
