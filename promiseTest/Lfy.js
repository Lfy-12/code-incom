class Lfy {
    // 使用静态属性保存状态值
    static PENDING = 'pending';
    static FULFILLED = 'resolve';
    static REJECTED = 'reject';

    constructor(executor) {
        this.status = Lfy.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            // 因为 resolve或rejected方法在executor中调用，作用域也是executor作用域，这会造成this指向window;
            // 现在我们使用的是class定义，this为undefined。
            executor(this.resolve.bind(this),this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }

    resolve (value) {
        // 状态只能改变一次，所以添加条件判断
        if(this.status == Lfy.PENDING) {
            this.status = Lfy.FULFILLED;
            this.value = value;
            // 处理为 异步宏任务执行
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onFulfilled(this.value)
                })
            });
        }
    }
    
    reject (reason) {
        if(this.status == Lfy.PENDING) {
            this.status = Lfy.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onRejected(this.value)
                })
            });
        }
    }

    then (onFulfilled, onRejected) {
        // then的函数参数都不是必须的，所以需要设置默认值为函数，用于处理当没有传递时情况
        if (typeof onFulfilled != "function") {
            onFulfilled = () => this.value
        }
        if (typeof onRejected != "function") {
            onRejected = () => this.value
        }

        // Promise中的then是链式调用执行的，所以then也要返回Promise才能实现
        let promise = new Lfy( (resolve, reject) => {
            if(this.status == Lfy.FULFILLED) {
                setTimeout(() => {
                    this.parse(promise, onFulfilled(this.value), resolve, reject)
                });
            }
            if(this.status == Lfy.REJECTED) {
                setTimeout(() => {
                    this.parse(promise, onRejected(this.value), resolve, reject)
                });
            }
            if(this.status == Lfy.PENDING) {
                this.callbacks.push({
                    onFulfilled: value => {
                        this.parse(promise, onFulfilled(value), resolve, reject)
                    }, 
                    onRejected: value => {
                        this.parse(promise, onRejected(value), resolve, reject)
                    }
                })
            }
        } )
        return promise;
    }

    parse(promise, result, resolve, reject) {
        // then的返回的promise不能是then相同的Promise
        if(promise === result) throw TypeError('Chaining cycle detected for promise #<Promise>')
        try {
            if (result instanceof Lfy) {
                result.then(resolve, reject)
            } else {
                resolve(result)
            }
        } catch (error) {
            reject(error)
        }
    }

    // 实现Promise的resolve方法
    static resolve(value) {
        return new Lfy((resolve,reject) => {
            if(value instanceof Lfy) {
                value.then(resolve,reject)
            } else {
                resolve(value)
            }
        })
    }

    static reject(value) {
        return new Lfy((resolve,reject) => {
            reject(value)
        })
    }

    static all(promises) {
        return new Lfy( (resolve,reject) => {
            const values = [];
            promises.forEach(promise => {
                promise.then(
                    value => {
                        values.push(value)
                        if(values.length == promises.length) {
                            resolve(values)
                        }
                    },
                    reason => {
                        reject(reason)
                    }
                )
            });
        })
    }

    static race(promises) {
        return new Lfy ((resolve,reject) => {
            promises.forEach(promise => {
                promise.then(value => resolve(value), reason => reject(reason))
            })
        })
    }
}