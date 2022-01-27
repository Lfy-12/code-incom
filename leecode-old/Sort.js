// 冒泡排序
function bubbleSort(arr){
    let len = arr.length;
    for(let i=len-1;i>0;i--){
        for(let j=0;j<i;j++){
            if(arr[j] > arr[j+1]) [ arr[j],arr[j+1] ] = [ arr[j+1],arr[j] ];
        }
    }
    return arr;
}

// 选择排序
function selectSort(arr){
    let len = arr.length;
    for(let i=0;i<len-1;i++){
        let min = i;
        for(let j=i+1;j<len;j++){
            if(arr[min] > arr[j]) min = j;
        }
        [arr[i],arr[min]] = [arr[min],arr[i]];
    }
    return arr;
}

//插入排序
function insertSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp = arr[i];
        let j = i;
        while(arr[j-1]>temp && j>0){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

// 希尔排序
function shellSort(arr){
    let len = arr.length;
    for(let gap = Math.floor(len/2); gap > 0; gap = Math.floor(gap/2)){
        for(let i = gap; i < len; i++){
            let temp = arr[i];
            let j = i;
            while( arr[j-gap] > temp && j-gap >= 0){
                arr[j] = arr[j-gap];
                j = j-gap;
            }
            arr[j] = temp;
        }
    }
    return arr;
}

// 选择枢纽
function median(left, right) {
    // 1.求出中间的位置
    var center = Math.floor((left + right) / 2)

    // 2.判断并且进行交换
    if (this.array[left] > this.array[center]) {
        this.swap(left, center)
    }
    if (this.array[center] > this.array[right]) {
        this.swap(center, right)
    }
    if (this.array[left] > this.array[right]) {
        this.swap(left, right)
    }

    // 3.巧妙的操作: 将center移动到right - 1的位置.
    this.swap(center, right - 1)

    // 4.返回pivot
    return this.array[right - 1]
}

// 快速排序
function quickSort01(arr){
    if(arr.length <= 1) return arr;
    let left = [];
    let right = [];
    let pivotIndex = Math.floor(arr.length/2)
    let pivot = arr.splice(pivotIndex,1)[0]
    for(let v of arr){
        if(v<=pivot){
            left.push(v)
        }else{
            right.push(v)
        }
    }
    return quickSort01(left).concat(pivot,quickSort01(right))
}
function quickSort02(arr){
    quick(0,arr.length-1)
    return arr

    function quick(left,right){
        if(left >= right) return
        let pivot = left;
        let index = left + 1;
        for(let i = index; i <= right; i++){
            if(arr[pivot] > arr[i]){
                [arr[index],arr[i]] = [arr[i],arr[index]];
                index++
            }
        }
        [arr[pivot],arr[index-1]] = [arr[index-1],arr[pivot]]
        quick(0,index-2);
        quick(index,right);
    }
}
function quickSort03(arr) {
    // 获取枢纽，头中尾选中位数，在比较过程中顺便排好这三个的位置
    function median(left,right){
        let mid = Math.floor((left+right)/2)
        if(arr[left]>arr[mid]) [arr[left],arr[mid]] = [arr[mid],arr[left]]
        if(arr[mid]>arr[right]) [arr[mid],arr[right]] = [arr[right],arr[mid]]
        if(arr[left]>arr[mid]) [arr[left],arr[mid]] = [arr[mid],arr[left]]

        [arr[mid],arr[right-1]] = [arr[right-1],arr[mid]]
        return right-1
    }
}


let nums = [6,202,3,10,35,33,69,47,17];
let res = quickSort02(nums);
console.log(res);
