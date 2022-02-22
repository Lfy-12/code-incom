/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 20220209 second

// 递归 
// var fib = function(n) {
//     if(n<=1) return n
//     return fib(n-1) + fib(n-2)
// };

// 动态规划
var fib = function(n) {
    if(n<=1) return n;
    let pre=0, cur=1;
    for(let i=2;i<=n;i++) {
        let next = pre+cur;
        pre = cur;
        cur = next;
    }
    return cur;
};
// @lc code=end

