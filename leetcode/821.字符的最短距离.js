/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

// 20220117 first
 var shortestToChar = function (s, c) {
    let res = new Array(s.length).fill(s.length);
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) {
            res[i] = 0;
            while (num > 0) {
                res[i-num] = Math.min(res[i-num], num);
                num -= 1;
            }
            let temp = i+1;
            while (s[temp] != c && temp < s.length) {
                res[temp] = Math.min(res[temp], temp-i);
                temp += 1;
            }
            num = 0;
        } else {
            num += 1;
        }
    }
    return res
};
// @lc code=end

