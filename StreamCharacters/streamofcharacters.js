/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
    this.trie = new Trie(words);
    this.waitList = [];
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    this.waitList = this.trie.getPtrs(letter, this.waitList);
    // We check this wait list of ptrs to see if any finish a word
    let found = this.trie.checkPtrs(this.waitList);
    if (found) return true;
    return false;
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

class Trie {
    constructor(words) {
        this.wordEnd = '#';
        this.trie = new CharNode('');
        this.addWords(words)
    }
    addWords(words) {
        let ptr;
        words.forEach( word => {
            ptr = this.trie;
            word.split('').forEach(char => {
                if(ptr.children[char]) {
                    ptr = ptr.children[char];
                } else {
                    ptr = this.addChar(char, ptr);
                }
            });
            ptr = this.addChar(this.wordEnd, ptr)
        });
    }
    addChar(char, ptr = this.trie) {
        let newPtr = new CharNode(char);
        ptr.children[char] = newPtr;
        return newPtr
    }
    getPtrs(char, ptrs=[]) {
        let resPtrs = [];
        ptrs.forEach(ptr => {
            if (ptr.children[char]) {
                resPtrs.push(ptr.children[char])
            }
        })
        if (this.trie.children[char]) resPtrs.push(this.trie.children[char]);
        return resPtrs;
    }
    checkPtrs(ptrs) {
        return ptrs.some(ptr => {
            if (this.isWord(ptr)) return true;
        })
    }
    isWord(ptr) {
        if (ptr.children[this.wordEnd]) return true;
        return false;
    }
}

class CharNode {
    constructor(char) {
        this.val = char;
        this.children = {};
    }
}

// Input -  ["StreamChecker","query","query","query","query","query","query","query","query","query","query","query","query"]
[[["cd","f","kl"]],["a"],["b"],["c"],["d"],["e"],["f"],["g"],["h"],["i"],["j"],["k"],["l"]]

// Output - [null,false,false,false,true,false,true,false,false,false,false,false,true]
