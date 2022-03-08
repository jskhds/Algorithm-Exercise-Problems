// // async 返回一个 promise 对象
// async function fn1(){

//     return 100 // async 返回的是 Promise 函数
// }
// // console.log('fn1:',fn1()); // Promise { 100 } 


// //  fn1().then((data)=>{
// //      console.log(data); // 100
// //  })

// // await 相当于 then
// // 立即执行匿名函数
// !(async function () {
//     const p1 = Promise.resolve(300)
//     const data = await p1
//     console.log(data);  
// })()

// // 如果 await 后面跟的不是 promise 的值 相当于封装成 一个 promise
// !(async function () {
     
//     const data = await 400 // await Promise.resolve(400)
//     console.log(data);   // 400
// })()

// !(async function () {
     
//     const data3 = await fn1() // await Promise.resolve(400)
//     console.log(data3);   // 100
// })()

// // try...catch 相当于 promise catch
// !(async function(){
//     const p4 = Promise.reject('err')
//     try{
//         const res = await p4
//         console.log('res',res);
//     }catch(ex){
//         console.error('ex',ex) // ex err
//     }

// })()

// await 的一种冲突，用try...catch来解决
!(async function(){
    const p5 = Promise.reject('err')
    const res = await p5 // 因为 await 相当于 then 所以 rejected状态的promise走不到这一步
    console.log(res);
})