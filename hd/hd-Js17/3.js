// 状态保护与执行者异步捕获
class HD{
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';

    constructor(executor){
        this.status = HD.PENDING;
        this.value = null;
        try {
            executor(this.resolve.bind(this),this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(value){
        if(this.status == HD.PENDING){
            this.status = HD.FULFILLED;
            this.value = value;
        } 
    }

    reject(reason){
        if(this.status == HD.PENDING){
            this.status = HD.REJECTED;
            this.reason = reason;
        }
    }
}