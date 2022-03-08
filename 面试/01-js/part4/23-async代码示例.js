// async 里面的函数体（除了await）都是立即执行的
async function async1() {
    console.log('async1 start');  
    await async2()  
    // 下面三句都是异步回调
    console.log('async1 end');  
    await async3()
    // 下面一行是异步回调
    console.log('async1 end2');
}
async function async2() {
    console.log('async2'); 
    
}
async function async3() {
    console.log('async3');
}
console.log('script start'); 
async1()
console.log('script end'); 
