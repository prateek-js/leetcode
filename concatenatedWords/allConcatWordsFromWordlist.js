/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    var trie = new Trie(words);
    let result = [];
    words.forEach(word => {
        if (word.length > 0 && isComposedBy(word, trie)) 
          result.push(word);
      });
  return result;
};

isComposedBy(word, trie) {
    let arr = new Array(word.length + 1).fill(false);  
    arr[0] = true;
    for(let i = 1; i <= word.length + 1; i++){    
        let checkpoints = arr.reduce((points, curr, i) => {
          if (curr) points.push(i);
          return points;
        }, []);
        let snippets = checkpoints.map(cp => word.substring(cp, i));        
        for (let snippet of snippets){
          if (trie.hasWord(snippet) && snippet !== word){              
            arr[i] = true;
            break;
          }   
        }              
      }    
      return arr[arr.length - 1];
}

class Trie {  
  constructor(words){
    this.trie = {};
    for(let word of words){
      let node = this.trie;
      for(let char of word){      
        if (!node[char]) node[char] = {};
        node = node[char]
      }
      node.word = word;
    }
  }
    
    hasWord(word){
        let node = this.trie;
        for(let char of word){
          if(!node[char]) return false;
          node = node[char];
        }
        return !!node.word;
  }
}  

// Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
// "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
