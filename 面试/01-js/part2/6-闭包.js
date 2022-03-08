// 作用域链 先在自己的作用域里找，找不到再往上一级找，找到就用，找不到就再往上直到一级，如果到了全局都找不到，就是undefined

function  fn1(){
    let a = 10;
    let b = 20;
    console.log(a); //10
    console.log(b); //20
    fn2();
    function fn2(){
        let a = 20;
        let c = 50;
        console.log(a);//20
        console.log(c);//50
    }
}
fn1();



// 1.闭包：函数嵌套函数 内部函数就是闭包
function outterFun(){
    let a = 10;
    function innerFun(){   
          console.log(a);
    }
    // 不要加括号 return innerFun()
    return innerFun;
}
// 这样相当于把innerFun给了fun2
// 2.一般来说，函数调用以后，内部变量就应该销毁了，也就是释放内存空间
// 但是对于闭包来说，内部函数没有执行完，外部函数的变量不会被销毁
let fun2 = outterFun();
fun2();


// 3.闭包的应用:封装 这样就不会有变量矛盾的情况 相关的功能写在一起，代码也更清爽
// 格式说明 自定义name = ()() 前面一个括号里写完整的函数，后面一个括号表示声明的时候就调用了
let  block=(function(){
    let a = 10;
    let b = 20;
    function add(){
        return a + b;
    }
    function sub(){
        return a - b;
    }
    // 这一串相当于 block是一个对象  { add: [Function: add], sub: [Function: sub] }
    return {
        add,
        sub
    }
})()
console.log(block);
// 调用
console.log(block.add());
console.log(block.sub());

