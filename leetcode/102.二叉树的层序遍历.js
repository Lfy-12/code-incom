/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if(!root) return res;

    let dfs = [root];
    while(dfs.length) {
        let tmp = []
        for(let i=0; i<dfs.length;i++) {
            if(dfs[i].left) tmp.push(dfs[i].left);
            if(dfs[i].right) tmp.push(dfs[i].right);
            dfs[i] = dfs[i].val;
        }
        res.push(dfs);
        dfs= tmp;
    }
    return res;
};

var levelOrder = function(root) {
    let depth = 0;
    let res = [];
    dfs(root);
    return res;

    function dfs(root) {
        if(!root) return;
        depth += 1;
        if(res.length < depth) res.push([root.value]);
        else res[depth-1].push(root.value);

        dfs(root.left);
        dfs(root.right);

        depth -= 1;
    }
};
// @lc code=end

