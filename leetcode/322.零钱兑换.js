/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 暴力递归
var coinChange = function (coins, amount) {
    function dp(n) {
        if (n == 0) return 0;
        if (n < 0) return -1;
        let res = Number.MAX_SAFE_INTEGER;
        for (let coin of coins) {
            let subproblem = dp(n - coin);
            if (subproblem == -1) continue;
            res = Math.min(res, 1 + subproblem)
        }
        return res == Number.MAX_SAFE_INTEGER ? -1 : res
    }
    return dp(amount)
};

// 带备忘录的递归
var coinChange = function (coins, amount) {
    let memo = new Map()
    function dp(n) {
        if(memo.has(n)) return memo.get(n);
        if(n == 0) return 0;
        if(n < 0) return -1;
        let res = Number.MAX_SAFE_INTEGER;
        for(let coin of coins) {
            let subproblem = dp(n - coin)
            if(subproblem == -1) continue;
            res = Math.min(res, 1 + subproblem)
        }
        memo[n] = res == Number.MAX_SAFE_INTEGER ? -1 : res
        return memo[n]
    }
    return dp(amount)
};

// 动态规划
var coinChange = function (coins, amount) {
    let arr = new Array(amount+1).fill(amount+1);
    // base case
    arr[0] = 0;
    for(let i in arr) {
        for(let coin of coins) {
            if(i-coin < 0) continue;
            arr[i] = Math.min(arr[i], 1+arr[i-coin])
        }
    }
    return arr[amount+1] == amount+1 ? -1 : arr[amount+1]
}


// @lc code=end

