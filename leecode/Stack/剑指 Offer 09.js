var CQueue = function() {
    this.addArr = [];
    this.deleteArr = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.addArr.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(!this.deleteArr.length){
        if(!this.addArr.length) return -1;
        let length = this.addArr.length;
        for(let i=0;i<length;i++){
            this.deleteArr.push(this.addArr.pop());
        }
    }
    return this.deleteArr.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

 var obj = new CQueue()
 obj.appendTail(5);
 obj.appendTail(2);
 obj.deleteHead();
 obj.deleteHead();
