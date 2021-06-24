//Promise 的 pendding 状态处理
class HD{
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';

    constructor(executor){
        this.status = HD.PENDING;
        this.value = null;
        this.callbacks = [];
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
            this.callbacks.map(callback=>{
                callback.onFulfilled(value)
            })
        } 
    }

    reject(reason){
        if(this.status == HD.PENDING){
            this.status = HD.REJECTED;
            this.value = reason;
            this.callbacks.map(callback=>{
                callback.onRejected(reason)
            })
        }
    }

    then(onFulfilled,onRejected){
        if(typeof onFulfilled != 'function') onFulfilled= ()=>{};
        if(typeof onRejected != 'function')  onRejected= ()=>{};

        if(this.status == HD.PENDING){
            this.callbacks.push({onFulfilled,onRejected})
        }

        if(this.status == HD.FULFILLED){
            setTimeout(() => {
                try {
                    onFulfilled(this.value)
                } catch (error) {
                    onRejected(error)
                }
            });
        }
        
        if(this.status == HD.REJECTED){
            setTimeout(() => {
                try {
                    onRejected(this.value)
                } catch (error) {
                    onRejected(error)
                }
            });
            
        }

    }
}