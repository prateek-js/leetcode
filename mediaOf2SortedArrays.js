// Helper functions
const even = (n) => n % 2 === 0;
const odd = (n) => n % 2 === 1;
const sort = (arr) => arr.sort((a, b) => a - b);

// Gives the median of a sorted array
const median = (arr) => {
    const n = arr.length;
    if (odd(n)) {
        return arr[(n - 1) / 2];
    } else {
        return (arr[(n/2) - 1] + arr[n/2]) / 2;
    }
};

// Deletes the first `n` entries from `arr`
// (since arr is sorted, these are the `n` lowest numbers)
const discardLowest = (arr, n) => {
    arr.splice(0, n);
}

// Deletes the last `n` entries from `arr` (the `n` highest numbers)
const discardHighest = (arr, n) => {
    arr.splice(arr.length - n, n);
}

// For an array of length n, we will want to discard
// all the entries above (or below) the median, not including the median itself.
// (Note: If n is even, the middle two entries are "part of" the median,
//  so we don't want to discard either of these.)
// This function just tells us how many to discard, based on n.
const safeToDiscard = (n) => {
    if (odd(n)) return (n - 1) / 2;
    else return (n / 2) - 1;
}

/**
 * Main method
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    
    // On every loop, we will throw away some numbers from `nums1` and `nums2`.
    // This could also be written in a tail-recursive style.
    while (true) {
        
        // If we have 2 or fewer numbers in either array, we're done;
        // just throw them all together, sort, and take the median.
        if (nums1.length <= 2 || nums2.length <= 2) {
            const allRemainingNumbers = sort(nums1.concat(nums2));
            return median(allRemainingNumbers);
        }

        // Take the median of both arrays.
        const m1 = median(nums1);
        const m2 = median(nums2);
        
        // BIG IDEA: The "true median" always lies between m1 and m2 (inclusive).

        // Therefore if the two medians are equal, we are done.
        if (m1 === m2) return m1;

        // If not, then we can throw away some numbers
        // that lie below the lower median or above the upper median,
        // since none of them can be the true median.
        //
        // As long as we throw away the *same number of elements*
        // from both sides, the true median will be unaffected.
        const numToDiscard = Math.min(
            safeToDiscard(nums1.length),
            safeToDiscard(nums2.length)
        );
        if (m1 < m2) {
            discardLowest(nums1, numToDiscard);
            discardHighest(nums2, numToDiscard);
        } else {
            discardHighest(nums1, numToDiscard);
            discardLowest(nums2, numToDiscard);
        }
    }
};

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
