/*
 * @lc app=leetcode.cn id=2006 lang=javascript
 *
 * [2006] 差的绝对值为 K 的数对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 20220209 first

// 暴力法
// var countKDifference = function(nums, k) {
//     // let max = Math.max(...nums),
//     //     min = Math.min(...nums);
//     // if(max-min < k) return 0;
//     let res = 0;
//     for(let i=0; i<nums.length-1; i++) {
//         for(let j=i+1; j<nums.length; j++) {
//             let abs = Math.abs(nums[i]-nums[j]);
//             if(abs == k) res++;
//         }
//     }
//     return res;
// };

// map + 一次for循环
var countKDifference = function(nums, k) {
    let map = new Map();
    let res = 0;
    for(let j=0; j<nums.length; j++) {
        res += (map.get(nums[j]+k) || 0) + (map.get(nums[j]-k) || 0);
        map.set(nums[j], (map.get(nums[j]) || 0) +1 )
    }
    return res;
};

// @lc code=end

