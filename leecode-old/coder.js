// 封装ArrayList
function ArrayList() {
    this.array = []

    ArrayList.prototype.insert = function (item) {
        this.array.push(item)
    }

    ArrayList.prototype.toString = function () {
        return this.array.join()
    }

    ArrayList.prototype.swap = function (m, n) {
        var temp = this.array[m]
        this.array[m] = this.array[n]
        this.array[n] = temp
    }

    // 选择枢纽
    ArrayList.prototype.median = function (left, right) {

        // 1.求出中间的位置
        var center = Math.floor((left + right) / 2)

        // 2.判断并且进行交换
        if (this.array[left] > this.array[center]) {
            this.swap(left, center)
        }
        if (this.array[center] > this.array[right]) {
            this.swap(center, right)
        }
        if (this.array[left] > this.array[center]) {
            this.swap(left, center)
        }

        // 3.巧妙的操作: 将center移动到right - 1的位置.
        this.swap(center, right - 1)
        // 4.返回pivot
        return this.array[right - 1]
    }

    // 快速排序实现
    ArrayList.prototype.quickSort = function () {
        this.quickSortRec(0, this.array.length - 1)
    }

    ArrayList.prototype.quickSortRec = function (left, right) {
        // 0.递归结束条件
        if (left >= right) return

        // 1.获取枢纽
        var pivot = this.median(left, right)

        // 2.开始进行交换
        var i = left
        var j = right - 1
        while (i<j) {
            while (this.array[++i] < pivot) { }
            while (this.array[--j] > pivot) { }
            if (i < j) {
                this.swap(i, j)
            } else {
                break
            }
        }

        // 3.将枢纽放在正确的位置
        this.swap(i, right - 1)
        // 4.递归调用左边
        this.quickSortRec(left, i - 1)
        this.quickSortRec(i + 1, right)
    }
}

let arr = new ArrayList();
arr.insert(36);
arr.insert(56);
arr.insert(5);
arr.insert(18);
arr.insert(29);
arr.insert(111);
arr.insert(56);
arr.insert(800);
arr.insert(24);
arr.insert(57);
arr.insert(39);
arr.insert(22);
arr.insert(48);
arr.insert(23);
arr.insert(88);
arr.insert(9);
console.log(arr.toString());
arr.quickSort();
console.log(arr.toString());