// Then 的基础构建
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
            this.value = reason;
        }
    }

    then(onFulfilled,onRejected){
        if(typeof onFulfilled != 'function') onFulfilled= ()=>{};
        if(typeof onRejected != 'function')  onFulfilled= ()=>{};
        if(this.status == HD.FULFILLED){
            onFulfilled(this.value)
        }
        if(this.status == HD.REJECTED){
            onFulfilled(this.value)
        }

    }
}