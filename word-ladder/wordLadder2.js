var findLadders = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return [];
    if (beginWord === endWord) return [[beginWord]];
    
    const adjList = {};
    const addEdge = (u, v) => {
        if (!adjList[u]) adjList[u] = [];
        adjList[u].push(v);
    };

    const buckets = {};
    if (!wordList.includes(beginWord)) wordList.push(beginWord);

    // create buckets. words in a bucket are connected.
    wordList.forEach(word => {
        const chArr = word.split('');
            for (let i = 0; i < word.length; i++) {
                chArr[i] = '*';
                const bucket = chArr.join('');
                if (!buckets[bucket]) buckets[bucket] = [];
                buckets[bucket].push(word);
                chArr[i] = word[i];
            }
    });

    // add edges to graph
    for (const bucket in buckets) {
        for (const word1 of buckets[bucket]) {
            for (const word2 of buckets[bucket]) {
                if (word1 !== word2) addEdge(word1, word2);
            }
        }
    }

    const q = [];
    q.push(beginWord);
    const dist = { [beginWord]: 0 };

    // get all vertices' dist from beginWord
    while (q.length) {
        const word = q.pop();
        const neighbors = adjList[word] || [];
        neighbors.forEach(v => {
            if (dist[v] === undefined) {
                dist[v] = dist[word] + 1;
                q.unshift(v);
            }
        });
    }
    
    if (dist[endWord] === undefined) return [];

    const res = [];

    // dfs to find all shortest paths
    const dfs = (word, path) => {
        if (word === endWord) {
            res.push([...path]);
            return;
        }

        (adjList[word] || []).forEach(v => {
            if (dist[v] === dist[word] + 1) dfs(v, [...path, v]);
        });
    };

    dfs(beginWord, [beginWord]);

    return res;
};


Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
