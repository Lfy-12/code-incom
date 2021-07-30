// 题目
// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
let arr = [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]]


// 解答
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length === 0)  return false;
    let x = 0;
    let y = matrix[0].length-1;
    while(x<=matrix.length-1 && y>=0){
        if(target === matrix[x][y]){
            return true;
        }else if(target > matrix[x][y]){
            console.log(matrix[x][y]);
            x++;
        }else if(target < matrix[x][y]){
            console.log(matrix[x][y]);
            y--;
        }
    }
    return false;
}

let res = findNumberIn2DArray(arr,20)
console.log(res);




/* --个人总结
    考虑问题不够周全，比如空数组
    知识点记忆有误  只要[指定条件为true]，循环就可以一直执行代码块。
    解题思路直接看了官方题解
*/



/* --解题思路
    根据题意已知，二维数组从左往右递增，从上往下递增，所以得出以下结论：

    某列的某个数字，该数之上的数字，都比其小；
    某行的某个数字，该数右侧的数字，都比其大；
    所以，解题流程如下所示：

    以二维数组右上角为原点，建立直角坐标轴。
    若当前数字大于了查找数，查找往左移一位。
    若当前数字小于了查找数，查找往下移一位。

    直到超出数组边界

*/
