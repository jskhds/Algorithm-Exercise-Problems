// 定义普通函数
function fn(){
    return true;
}
const fn1 = function(){
    return true
}

// 定义箭头函数
const fn2 = ()=>{
    return true;
}
/**
 * ()中写参数 只有一个参数 可以不写括号
 * {}写函数体 只有一个return 可以不写return
 * const  fun = ()=> true
 */

// 二者区别 this指向不同
// 如果是普通函数 谁调用的this指向谁
// 如果是箭头函数，函数写在哪，this就指哪
 
let obj1 = {
    name:"xiaoming",
    age:17,
    sayName(){
        console.log(this); //obj1
        // console.log("我叫" + this.name);
        console.log(`我叫${this.name}`);  //我叫xiaoming
        setTimeout(function(){
            console.log(this);//window
            console.log(`我叫${this.name}`);//我叫undefined
        },500)
    }
}
//因为setTimeout是Window调用的，所以this指向的是window，不是
// obj1.sayName()

let obj2 = {
    name:"xiaoming",
    age:17,
    sayName(){
        console.log(this); //obj
        // console.log("我叫" + this.name);
        console.log(`我叫${this.name}`);  //我叫xiaoming
        setTimeout( ()=>{
            console.log(this); //obj2 写在obj里 this就指向obj
            console.log(`我叫${this.name}`);
        },500)
    }
}
obj2.sayName();