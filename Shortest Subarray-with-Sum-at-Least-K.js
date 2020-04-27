/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    let sum = [];
        for (let i = 0; i < A.length; i++) {
            if (A[i] >= K) return 1;
            sums[i + 1] = sums[i] + A[i];
        }
        let min = Infinifty;
       // LinkedList<Integer> list = new LinkedList<>();
        for (int i = 0; i < sums.length; i++) {
            while (!list.isEmpty() && sums[i] - sums[list.getFirst()] >= K) {
                min = Math.min(min, i - list.getFirst());
                list.removeFirst();
            }
            while (!list.isEmpty() && sums[i] <= sums[list.getLast()]) {
                list.removeLast();
            }
            list.addLast(i);
        }
        return min != Infinifty ? min : -1;
};

Input: A = [2,-1,2], K = 3
Output: 3
