// 卓望  快速排序
function sort(arr){
  if(arr.length <= 1) return arr
  let left = [], right = [];
  let midIndex = Math.floor(arr.length/2);
  // 分离出中间值作为枢纽
  let mid = arr.splice(midIndex,1)[0];
  for(let v of arr){
    if(v <= mid){
      left.push(v);
    }else{
      right.push(v);
    }
  }
  return sort(left).concat(mid,sort(right));
}

let res = sort([2,5,3,79,34,55,12,34,222,50,79])
console.log(res);
