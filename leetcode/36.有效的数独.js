/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let row = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let column = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let square = new Array(3)
        .fill(0)
        .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let value = board[i][j];
            if (value !== ".") {
                const index = value * 1 - 1;
                if (
                    ++row[i][index] > 1 ||
                    ++column[j][index] > 1 ||
                    ++square[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1
                )
                    return false;
            }
        }
    }
    return true;
};
// @lc code=end
