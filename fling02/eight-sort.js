// 工具函数 —— 交换位置
function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


// 冒泡  ————  遍历 大的 一直冒泡到数组尾部
function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr)
            }
        }
    }
    return arr
}


// 选择排序  ————  遍历 小的 放到数组头部
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let index = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[index]) index = j
        }
        swap(i, index, arr)
    }
    return arr
}


// 插入排序  ————  假设部分已有序
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i;
        while (arr[j - 1] > temp && j > 0) {
            arr[j] = arr[j - 1];
            j -= 1;
        }
        arr[j] = temp;
    }
    return arr;
}


// 希尔排序 ———— 间隔法 + 插入排序
function shellSort(arr) {
    for (let gap = arr.length >> 1; gap > 0; gap = gap >> 1) {
        for (let i = gap; i < arr.length; i++) {
            let temp = arr[i];
            let j = i;
            while (arr[j - gap] > temp && j > 0) {
                arr[j] = arr[j - gap];
                j = j - gap;
            }
            arr[j] = temp;
        }
    }
    return arr;
}


// 快速排序
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i < arr.length; i++) {
        if (arr[pivot] > arr[i]) {
            swap(index, i, arr);
            index += 1;
        }
    }
    swap(pivot, index - 1, arr);
    quickSort(arr, 0, index - 2);
    quickSort(arr, index, right);
    return arr;
}


// 堆排 ———— 大顶堆、小顶堆
function heapSort(arr) {
    // 初始化大顶堆
    for(let i=Math.floor(arr.length/2-1); i>=0; i--) {
        buildMaxHeap(arr, i, arr.length)
    }
    // 排序，每一次for循环找出一个当前最大值，数组长度减一
    for(let i=Math.floor(arr.length-1); i>0; i--) {
        swap(0, i, arr);
        buildMaxHeap(arr, 0, i);
    }
    return arr;
}
function buildMaxHeap(arr, i,length) {
    for(let j=2*i+1; j<length; j=2*j+1) {
        let temp = arr[i];
        if(j+1<length && arr[j]<arr[j+1]) {
            j++;
        }
        if(temp < arr[j]) {
            swap(i, j, arr);
            i = j;
        } else{
            break;
        }
    }
    return arr;
}


// 桶排/基数排序
// 归并

console.log(heapSort([2, 56, 4, 33, 88, 20, 11, 45]));