// (async function(){
//     console.log('start');
//     const a = await 100 // 相当于返回 100
//     console.log('a',a);
//     const b = await Promise.resolve(200)
//     console.log('b',b);
//     const c = await Promise.reject(200) // await 相当于then 只会被resolve状态触发，所以rejected状态以后的所有代码都不会被执行
//     console.log('c',c);
//     console.log('end');
// })()
// 先执行同步，call stack清空，执行微任务，DOM渲染，再执行宏任务
async function async1(){
    console.log('async1 start'); // 2.立即执行async里的函数体
    await async2() // 先执行 async2 再执行 await，await后面的都是异步回调 作为微任务
    console.log('async1 end'); // 6 执行微任务 打印async1 end（如果前面没有await 则也一样立即执行）
}
   
async function async2(){
    console.log('async2'); // 3.立即执行 async里面的函数体
}

console.log('script start'); // 1.
setTimeout(()=>{
    console.log('setTimeout');
},0) // 8.宏任务 最后执行

async1() // 顺序执行 async1 的函数体 执行到3 async1 里面的同步代码就执行完了 继续往下走
new Promise(function(resolve){
    console.log('promise1'); // 4.promise里面的function立即执行
    resolve(); // 返回resolve状态 后面的then就是回调了 作为微任务
}).then(function(){
    console.log('promise2'); //7. 执行微任务 打印 promise2
})

console.log('script end'); // 5. 到这里整个函数的同步任务就执行完了 开始执行微任务

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout