// 创建BinarySearchTree
function BinarySerachTree() {
    // 保存根的属性
    this.root = null

    // 创建结点构造函数
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    // 二叉搜索树相关的操作方法

    // 向树中插入数据
    BinarySerachTree.prototype.insert = function (key) {
        // 1.根据key创建对应的node
        var newNode = new Node(key)
        
        // 2.判断根结点是否有值
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    BinarySerachTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) { // 1.准备向左子树插入数据
            if (node.left === null) { // 1.1.node的左子树上没有内容
                node.left = newNode
            } else { // 1.2.node的左子树上已经有了内容
                this.insertNode(node.left, newNode)
            }
        } else { // 2.准备向右子树插入数据
            if (node.right === null) { // 2.1.node的右子树上没有内容
                node.right = newNode
            } else { // 2.2.node的右子树上有内容
                this.insertNode(node.right, newNode)
            }
        }
    }

    // 先序遍历
    BinarySerachTree.prototype.preOrderTraversal = function (handler) {
        this.preOrderTranversalNode(this.root, handler)
    }
    BinarySerachTree.prototype.preOrderTranversalNode = function (node, handler) {
        if (node !== null) {
            // 1.打印当前经过的节点
            handler(node.key)
            // 2.遍历所有的左子树
            this.preOrderTranversalNode(node.left, handler)
            // 3.遍历所有的右子树
            this.preOrderTranversalNode(node.right, handler)
        }
    }

    // 中序遍历
    BinarySerachTree.prototype.inOrderTraversal = function (handler) {
        this.inOrderTraversalNode(this.root, handler)
    }
    BinarySerachTree.prototype.inOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, handler)
            handler(node.key)
            this.inOrderTraversalNode(node.right, handler)
        }
    }

    // 后序遍历
    BinarySerachTree.prototype.postOrderTraversal = function (handler) {
        this.postOrderTraversalNode(this.root, handler)
    }

    BinarySerachTree.prototype.postOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            this.postOrderTraversalNode(node.left, handler)
            this.postOrderTraversalNode(node.right, handler)
            handler(node.key)
        }
    }

    // 获取最大值和最小值
    BinarySerachTree.prototype.min = function () {
        var node = this.root
        while (node.left !== null) {
            node = node.left
        }
        return node.key
    }
    BinarySerachTree.prototype.max = function () {
        var node = this.root
        while (node.right !== null) {
            node = node.right
        }
        return node.key
    }

    // 搜搜特定的值
    BinarySerachTree.prototype.search = function (key) {
        return this.searchNode(this.root, key)
    }
    BinarySerachTree.prototype.searchNode = function (node, key) {
        // 1.如果传入的node为null那么, 那么就退出递归
        if (node === null) {
            return false
        }
        // 2.判断node节点的值和传入的key大小
        if (node.key > key) { // 2.1.传入的key较小, 向左边继续查找
            return this.searchNode(node.left, key)
        } else if (node.key < key) { // 2.2.传入的key较大, 向右边继续查找
            return this.searchNode(node.right, key)
        } else { // 2.3.相同, 说明找到了key
            return true
        }
    }


}





let tree = new BinarySerachTree();
tree.insert(30);
tree.insert(15);
tree.insert(41);
tree.insert(33);
tree.insert(50);
tree.insert(45);

var resultString = ""
tree.inOrderTraversal(function (key) {
    resultString += key + " "
})
alert(resultString);

let max = tree.max();
alert(max);

