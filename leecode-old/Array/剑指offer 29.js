var spiralOrder = function(matrix) {
    let res = [];
    let flag = true;
    while(matrix.length){
        console.log(flag);
        if(flag){
            // 遍历matrix最顶层
            res = res.concat(matrix.shift());
            console.log(JSON.stringify(matrix));
            // 遍历matrix最右层
            for(let i=0;i<matrix.length;i++){
                 matrix[i].length && res.push(matrix[i].pop());
            }
            console.log(JSON.stringify(matrix));
        }else{
             // 遍历matrix最底层
            res = res.concat(matrix.pop().reverse());
            console.log(JSON.stringify(matrix));
             // 遍历matrix最左层
            for(let i=matrix.length-1;i>=0;i--){
                matrix[i].length && res.push(matrix[i].shift())
            }
            console.log(JSON.stringify(matrix));
        }
        flag = !flag
    }
    return res
};

let matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]
let res = spiralOrder(matrix);
console.log(res);