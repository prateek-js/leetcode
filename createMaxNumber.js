/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let arr = (num + '').split('');
    for (let i = 0, len = arr.length; i < len; i++) {
        let maxInx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] >= arr[maxInx]) {
                maxInx = j;
            }
        }
        if (maxInx != i && arr[maxInx] != arr[i]) {
            swap(arr, maxInx, i);
            return +arr.join('');
        }
    }
    return num;
};

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


//     public int maximumSwap(int num) {
//         char[] A = Integer.toString(num).toCharArray();
//         int[] last = new int[10];
//         for (int i = 0; i < A.length; i++) {
//             last[A[i] - '0'] = i;
//         }

//         for (int i = 0; i < A.length; i++) {
//             for (int d = 9; d > A[i] - '0'; d--) {
//                 if (last[d] > i) {
//                     char tmp = A[i];
//                     A[i] = A[last[d]];
//                     A[last[d]] = tmp;
//                     return Integer.valueOf(new String(A));
//                 }
//             }
//         }
//         return num;
//     }

// O(n)

// Input: 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.
