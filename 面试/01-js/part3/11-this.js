function fn1(){
    console.log(this);
}
fn1() // window
// call 和 bind 可以改变函数 this 的指向 但是用法有所不同
fn1.call( {x:100} )  // { x: 100 }
// bind 返回一个新的函数执行
const fn2 = fn1.bind( {x:200} ) // { x: 200 }
fn2()

 const zhangsan = {
     name: "张三",
     sayHi(){
         console.log(this);
     },
     wait(){
         setTimeout(function(){
             console.log(this);
         }) 
     },
     waitAgain(){
         setTimeout(()=>{
             console.log(this);
         })
     }
     
 }
 zhangsan.sayHi() // 当前对象 也就是 zhangsan 这个对象
 zhangsan.wait() // setTimeout  里面的普通函数 this 指向 window
 zhangsan.waitAgain()  // 当前对象 也就是 zhangsan 这个对象

 