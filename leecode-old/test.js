var aaa=[36,56,5,18,29,111,56,800,24,57,39,22,48,23,88,9,];
// 每次选择最左边的数作为基数
function quickSort(arr){
  if (arr.length<2) { return arr; }
  // 定义左指针
  var left=0;
  // 定义右指针
  var right=arr.length-1;
  //开启每一轮的排序
  while(left<right){
    // 寻找右边比arr[0]小的数的下标
    while(arr[right]>=arr[0] && left<right){
      right=right-1;
    }
    // 寻找左边比arr[0]大的数的下标
    while(arr[left]<=arr[0] && left<right){
      left++;
    }
    //当左边指针与右边指针相遇后，交换arr[0]与当前两个指针所在的元素
    if (right==left) {
      let mid=arr[right];
      arr[right]=arr[0];
      arr[0]=mid;
      break;
    }
    // 当左指针小于右指针的位置，交换两个指针当前位置的元素
    let tem=arr[right];
    arr[right]=arr[left];
    arr[left]=tem;
    // console.log('2');
  }
  //递归实现
  return quickSort(arr.slice(0,left)).concat(arr.slice(left,right+1)).concat(quickSort(arr.slice(right+1)));
}
//对数组进行排序
console.time('计时器1')
quickSort(aaa)
console.timeEnd('计时器1')

