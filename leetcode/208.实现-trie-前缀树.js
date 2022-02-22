/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

// 2022.1.6 first

var Trie = function() {
    this.children = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.children
    for (let ch of word) {
        if(!node[ch]) {
            node[ch] = {}
        }
        node = node[ch]
    }
    node.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.searchPrefix = function(prefix) {
    let node = this.children
    for (let ch of prefix) {
        if(!node[ch]) return false
        node = node[ch]
    }
    return node
}

Trie.prototype.search = function(word) {
    const res = this.searchPrefix(word)
    
    return res.isEnd != undefined
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix)
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

