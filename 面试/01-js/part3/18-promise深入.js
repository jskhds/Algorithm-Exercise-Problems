// // 三种状态
// const p1 = new Promise((resolve,reject)=>{

// })
// console.log('p1',p1);  // p1 Promise { <pending> }

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve()
//     })
// })
// console.log('p2',p2); // pending
// setTimeout(()=>{
//     console.log('p2-setTimeOut',p2);  // resolved （fulfilled）
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject()
//     })
// })
// console.log('p3',p3); // pending
// setTimeout(()=>{
//     console.log('p3-setTimeout',p3); // rejected
// })


// 状态转换 不会触发什么 会触发什么
const p1 =  Promise.resolve(100)
p1.then((data)=>{
    console.log('data1',data);
}).catch(err=>{
    console.error('err1',err)
})  // resolve 只会执行 then 结果 data1 100

const p2 = Promise.reject('err')
p2.then(data=>{
    console.log('data2',data);
}).catch(err=>{
    console.log('err2',err);
})  // reject 只会执行 catch 结果 err2 err