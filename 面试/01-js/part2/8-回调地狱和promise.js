

// 获取奶茶的方法
// function getTea(fn){
//     setTimeout(()=>{
//        fn("奶茶")
//     },500)
// }

// // 获取火锅的方法
// function getHotPot(fn){
//     setTimeout(()=>{
//         fn("火锅")
//     },1000)
// }
/*  1.简单的并列 喝奶茶和吃火锅
// 调用获取奶茶的方法
getTea(function(data){
    console.log(data);
})
// 调用火锅
getHotPot(function(data){
    console.log(data);
})
*/

/*2.回调地狱 实现功能：异步程序，让一个函数必须在另一个函数之前执行 不足：一层一层叠加，不适合维护*/
//  getHotPot(function(data){
//     console.log(data);
//     getTea(function(data){
//         console.log(data);
//         getTea(function(data){
//             console.log(data);
//             getHotPot(function(data){
//                 console.log(data);
//             })
//         })
//     })
//  })

/*2.第一种解决回调地狱的方法  promise对象*/
// promise对象 resolve的参数暴露出来，作为then的参数使用
let p = new Promise(function(resolve){
    resolve("hello world")
})
p.then(function(data){
    console.log(data);
})

// 获取奶茶的方法 
function getTea(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("奶茶")
         },500)
    })   
}
// getTea的值实际上是一个promise对象 所以用then方法就可以拿到奶茶
// getTea().then((data)=>{
//     console.log(data);
// })

// 火锅同理
function getHotpot(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("火锅")
         },800)
    })   
}
// getHotpot().then((data)=>{
//     console.log(data);
// })

// promise链式编程 注意这里的return
// getHotpot().then((data)=>{
//     console.log(data);
//     return getTea();
// }).then((data)=>{
//     console.log(data);
//     return getHotpot();
// }).then((data)=>{
//     console.log(data);
// })

/*2.第一种解决回调地狱的方法  async + await 
    await + promise对象 == 把resolve的参数直接暴露出来
*/
async function getData(){
    let p  = await getHotpot();
    console.log(p);
    let q = await getTea();
    console.log(q);
}
getData();