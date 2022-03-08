// const p1 = Promise.resolve().then(()=>{
//     return 100
// })

// console.log('p1',p1);  // 一开始是pending 执行后是 resolved

// const p2 = Promise.resolve().then(()=>{
//     throw new Error(['then error'])
// })

// console.log('p2',p2);  // 一开始是pending 执行后是 rejected

// p1.then(data=>{
//     console.log(data);  // 因为 p1 = 返回了一个resolved状态的promise 所以可以执行 then
// }).catch(err=>{
//     console.error('err1',err);  // catch 不会被执行
// })

// p2.then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.error('err2',err)  // p2 = 返回了一个rejected 状态的 promise 执行catch 
//                                 // 打印 err2 Error: then error（p2 throw 出来的错误）
// })

const p3 = Promise.reject('my error').catch(err=>{
    console.error('err',err)
})

console.log('p3',p3);  // reject 是正常执行了的 所以 promise 的状态是 resolved（fulfilled）
p3.then(()=>{
    console.log('100');  // 可以打印出来 100
})
const p4 = Promise.reject('my error').catch(err=>{
    throw new Error('catch error')
})
console.log('p4',p4);  // reject 的 catch 报错，返回一个 rejected 的 promise