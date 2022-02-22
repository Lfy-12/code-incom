// 快排 优化 加入随机数  
// 时间复杂度O(nlogn)
// 空间复杂度O(logn)，递归的深度
// var findKthLargest = function (arr, k) {
//     return quickSort(arr, 0, arr.length - 1, arr.length - k)
// }

// function quickSort(arr, left, right, target) {

//     const position = (arr,left,right) => {
//         let pivot = left;
//         let index = pivot + 1;
//         for (let i = index; i <= right; i++) {
//             if (arr[i] < arr[pivot]) {
//                 [arr[i], arr[index]] = [arr[index], arr[i]];
//                 index += 1;
//             }
//         }
//         [arr[index - 1], arr[pivot]] = [arr[pivot], arr[index - 1]];
//         return index -1
//     }
    
//     let random = Math.floor(Math.random()*(right-left+1)) + left;
//     [arr[random] , arr[left]] = [arr[left] , arr[random]]

//     let result = position(arr,left,right)

//     if (target < result) {
//         quickSort(arr, left, result-1, target);
//     } else if (target > result) {
//         quickSort(arr, result+1, right, target);
//     }
//     return arr[target]
// }


// 复杂度：时间复杂度O(nlogk)，循环n次，每次堆的操作是O(logk)。
// 空间复杂度O(k)，
// 维护大小为k的小顶堆 