/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 2022.1.11 second
var climbStairs = function(n) {

    // first
    // let res = 0;
    // function dp(n) {
    //     if(n == 0) return 1
    //     if(n < 0) return -1
    //     for(let step of [1,2]) {
    //         let part = dp(n - step)
    //         if(part == -1) continue
    //         res += 1
    //     }
    //     return res
    // }
    // return dp(n)

    // second
    let before = 1, after = 1;
    for(let i=2; i<=n; i++) {
        let sum = before + after;
        before = after;
        after = sum;
    }
    return after;

    
};
// @lc code=end

