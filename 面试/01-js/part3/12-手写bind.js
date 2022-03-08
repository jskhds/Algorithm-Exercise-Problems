function fn1(a,b,c){
    console.log("this",this);  // 单纯的this 就是window
    console.log( a,b,c)
    return "this is fn1"
}
 
// const fn2 = fn1.bind({x:100},1,2,3) //bind改变函数this的指向
// fn2()  //this { x: 100 }

// 原型链分析
// let flag = fn1.hasOwnProperty("bind")
// console.log(flag) // false
// flag = fn1.__proto__===Function.prototype?true:false // true
// console.log(flag);

 Function.prototype.bind1 = function() {
    //  先把传进来的参数列表变成数组 arguments 可以获得所用的参数
    const args = Array.prototype.slice.call(arguments)
    // 用shift 获取 args 的第一项也就是传进来的this（shift会改变原数组）
    const t = args.shift()
    // 原本的this 也就是 fn1 拿出来
    const self = this
    // 返回一个函数（实现bind的功能）
     return function () {
        //  apply 第一个参数是 this 第二个参数是 参数数组
         return self.apply(t,args)
         
     }
 }

const fn3 = fn1.bind1({x:100},1,2,3) //bind1改变函数this的指向
fn3()  //this { x: 100 }