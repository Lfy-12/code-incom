/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 20220124 second

// 后序遍历 递归法
// var maxDepth = function(root) {
//     if(!root) return 0;
//     return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
// };

// 前序遍历 回溯思想
// var maxDepth = function(root) {
//     let depth=0,max=0;
//     dfs(root);
//     return max

//     function dfs(root) {
//         if(!root) return;
//         depth += 1;
//         if(depth > max) max = depth;
//         dfs(root.left);
//         dfs(root.right);
//         depth -= 1;
//     }
// };

// 层级遍历
var maxDepth = function(root) {
    if(!root) return 0;
    let treeArr = [root];
    let max = 0;
    while(treeArr.length) {
        let tmp = [];
        for(let node of treeArr) {
            if(node.left) tmp.push(node.left)
            if(node.right) tmp.push(node.right)
        }
        treeArr = tmp;
        max += 1;
    }
    return max;
};

// @lc code=end

