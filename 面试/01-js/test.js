class myPromise  {
   
    state = 'pending' // promise 本身有三个状态，所以我们定义一个状态变量 pending fulfilled rejected
    value = undefined // 成功后的值
    reason = undefined // 失败后的原因

    resolveCallbacks = [] // pending 状态下存储成功的回调
    rejectCallbacks = [] // pending 状态下存储失败的回调
    // 本身的promise传入一个函数执行，有两个参数 一个 resolve 一个reject 
    constructor(fn){
        // fn 里面有两个函数， 这两个函数又分别有自己的参数，一个声明为 value 一个声明为 reason
        const resolveHandler = (value)=>{
            // 执行函数之前，要先判断并且限定状态
            if(this.state === 'pending'){
                this.state = 'fulfilled'
                // 把 value 存储起来
                this.value = value 
                // 在成功的状态下，就执行成功的回调，但是回调函数不止一个，所以要遍历执行 把 value 传进来
                this.resolveCallbacks.forEach(fn => fn(this.value))
            }
        }
        const rejectHandler = (reason)=>{
            if(this.state === 'pending'){
                this.state = 'rejected'
                // 把reason 存储起来
                this.reason = reason
                this.rejectCallbacks.forEach(fn => fn(this.reason))
            }

        }
        // 为了函数稳定性，在try catch里面执行传进来的函数，因为这个函数是用户定义的，不一定完全正确
        try{
             // 成功就执行这个函数 有问题 在catch里面执行  rejectHandler(err)函数
        fn( resolveHandler,rejectHandler)
        }catch(err){
            rejectHandler(err)
        }
       
    }
    // promise 有两个方法 then 和 catch
    // then 里面有两个参数 fn1 fn2 pending状态不执行,把它们存储起来； resolveed状态执行fn1； rejected状态执行 fn2
    then(fn1,fn2){
        // 因为传入 then 的时候，第一个参数可能是 null 所以需要判断一下类型，以便决定是否执行
        fn1 = typeof fn1 === 'function'? fn1 :(v) => v // 如果是函数，就是自己，不是的话，传入什么就是什么 类似于 p.then(v=>v)
        fn2 = typeof fn1 === 'function'? fn2 :(err) => err 
        // 接下来需要判断状态  
        // pending 存储 fn1 fn2 ，也就是添加到回调列表里面
        if(this.state === 'pending'){
            const p = new myPromise((resolve,reject)=>{
                // 在这里我们只是把函数push进来了，并没有开始遍历执行，当它开始执行的时候，说明状态已经变了，value也就存在
                this.resolveCallbacks.push(()=>{
                    try{
                        const newValue = fn1(this.value)
                        resolve(newValue)
                    }catch(err){
                        reject(err)
                    }
                })

                this.rejectCallbacks.push(()=>{
                    try{
                        const newReason = fn2(this.reason)
                        reject(newReason)
                    }catch(err){
                        reject(err)
                    }

                })
            })
            return p
        }
        // fulfilled 执行 fn1
        if(this.state === 'fulfilled'){
            // 不管是什么状态 then 返回的都是一个新的 promise eg p1.then((data)=>{return data + 1})
            const p1 = new myPromise((resolve,reject)=>{
                // 为了不出问题，还是用 try catch
                try{
                  const newValue =   fn1(this.value) // v 是 fn1 用了当前promise的参数执行后的值，要返回给新的promise（实现链式调用）
                  resolve(newValue)// 把返回的 newValue 给 resolve 再执行
                }catch(err){
                    reject(err)
                }
            })
            return p1
        }
        // rejected 执行 fn2
        if(this.state === 'rejected'){
            const p2 = new myPromise((resolve,reject)=>{
                try{
                    const newReason = fn2(this.reason)
                    reject(newReason) // 和 fulfilled的状态一样，只不过是传给 reject 再继续执行
                }catch(err){
                    reject(err)
                }
            })
            return p2
        }
    }
    // 其实 catch 是 then 的语法糖 因为 then里面已经定义了失败的回调了,所以 catch 相当于执行 then 的第二个函数
    catch(fn){
        return this.then(null,fn)
    }
}

//  以上 constructor then 和 catch 是 myProise 是 class 的实例方法，写在里面
// 剩下的是 promise 的全局静态api 要写在外面
// resolve 和 reject 其实就是返回一个新的promise，同步的简写形式使用起来比较方便
myPromise.resolve = function(value){
    return new  myPromise((resolve,reject)=>resolve(value))
}
myPromise.reject = function(reason){
    return  new myPromise((resolve,reject)=>reject(reason))
}
// all 传入 promise 数组，等待所有都 fulfilled 之后，返回新 promise
myPromise.all = function(promiseList = []){
    const p1 = new myPromise((resolve,reject)=>{
        const result = [] // 存储 promiseList 所有的结果
        const length = promiseList.length
        let resolveCount = 0
        // 在 forEach 里面不能用forEach((p,index)=>{})的index来判断是否都执行完，因为 forEach 很快，index瞬间就加满了，但是 then里面的函数不一定执行完了（尤其是有异步函数的情况）
        promiseList.forEach(p=>{
            p.then(data=>{
                result.push(data)
                // resolveCount 只能在then里面加，也就是then执行了才能加
                resolveCount++
                if(resolveCount === length){
                    resolve(result)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    })
    return p1 
}
// race 只要有一个 fulfilled，就返回 promise
myPromise.race = function(promiseList = []){
        let resolved = false
        const p1 = new myPromise((resolve,reject)=>{
            promiseList.forEach(p=>{
                p.then((data)=>{
                    if(!resolved){
                        resolve(data)
                        resolved = true
                    }
                    
                }).catch((err)=>{
                    reject(err)
                })
            })
        })
        return p1 
    }
    
    
    

 const p1 = new myPromise((resolve,reject)=>{
     resolve(100)
    
 })
 const p2 = p1.then(data1=>{
     return data1 + 1
 })
 const p3 = p2.then(data2=>{
     return data2 + 1
 })
//  const p4 = myPromise.all([p1,p2,p3]) 
//  console.log(p4); // 直接打是打不出来的，因为p4只是一个结果，不会等待p1的异步
//  p4.then(result =>{
//      console.log(result); // 这里 p4 调用了then，就会等待前面的都执行完，所以异步的结果会出来
//  })
 const p5 = myPromise.race([p1,p2,p3])
 p5.then(result =>{
     console.log(result);
 })