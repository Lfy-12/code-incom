// 声明Promise类并绑定this
class HD{
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';

    constructor(executor){
        this.status = HD.PENDING;
        this.value = null;
        executor(this.resolve.bind(this),this.reject.bind(this));
    }

    resolve(value){
        this.status = HD.FULFILLED;
        this.value = value;
    }

    reject(reason){
        this.status = HD.REJECTED;
        this.reason = reason;
    }
}