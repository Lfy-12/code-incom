/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

// 2022.1.6 first 

var mySqrt = function (x) {
    // 粗暴法
    // let res = 1;
    // while(res*res <= x) {
    //     res += 1;
    // }
    // return res -1;

    // 二分查找
    let left = 0,
        right = x;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (mid * mid < x) {
            left = mid + 1
        } else if (mid * mid > x) {
            right = mid - 1
        } else return mid
    }
    return right;
};
// @lc code=end