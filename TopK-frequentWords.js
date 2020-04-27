var topKFrequent = function(words, k) {
    let count = {};
    words.forEach(w => {
        if (count[w])
            count[w]++;
        else
            count[w] = 1;
    });

    const sorter = (a, b) => {
        if (a[1] === b[1]) {
            if (a[0] > b[0])
                return 1;
            else
                return -1;
        } else
            return b[1] - a[1];
    }

    return Object.entries(count).sort(sorter).map(c => c[0]).slice(0, k);
};


Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
