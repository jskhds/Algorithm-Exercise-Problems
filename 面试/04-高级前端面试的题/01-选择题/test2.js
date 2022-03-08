// 题目一
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    // console.log(value); // Both resolve, but promise2 is faster
    
  });
  // expected output: "two"
//   promise.race 方法 哪个promise先返回，就先执行哪个promise的res或者rej

// 题目二
// JavaScript中只要基本类型（number，string，Boolean，null，undefined，symbol和bigint）和对象 

// 题目三
(()=>{
    let x = (y=10);
    console.log(typeof x);
    console.log(typeof y);
    // 输出都是number
   
})();
console.log(typeof x); //undefined
console.log(typeof y); //number
// let x = (y = 10) 相当于 y = 10; let x = y; 前者相当于给全局添加了一个等于10的y，后者只是在块级作用域里声明了

// 题目四 这道题的主要意思是这样的，有的时候，我们写错变量名字了，直接赋值也可以用，但是实际上并不是对我们想要的变量进行的操作
// 所以为了避免未声明就使用，可以用 use strict模式
let greeting;
gerrting = {name :"linda"};
console.log( gerrting); //{}

// 题目五 还是引用类型的题
function checkAge(data){
    if(data === {age:18}){
        console.log("you are an adult now");
    }
    else if(data == {age:18}){
        console.log("you are still an adult");
    }
    else{
        console.log("i have no idea how old you are");
    }
}
checkAge({age:18}) //i have no idea how old you are
// 引用类型比较，不存在双等比较值相等或者三等完全等 都是比较引用相不相等 

// 题目六
function getInfo(one,two,three){
    console.log(one);
    console.log(two);
    console.log(three);
}
const person = 'linda'
const age = '18'
getInfo`${person }is ${age}year old` //[ '', 'is ', 'year old' ] linda 18 
// 如果使用标记的模板字符串，那么第一个参数的值始终是字符串值的数组 也就是说形参 one = [ '', 'is ', 'year old' ] 其余参数获取传递到模板字符串表达式的值

// 题目七
const person1 = {
    name:"linda",
    age:21
}
const changeAge =   (x={...person1})=>{
     x.age += 1;
}
const changeAgeAndName = (x={...person1}) =>{
    x.age += 1;
    x.name = 'sarah'
}
changeAge(person1);
changeAgeAndName();//没有传参 所以改不了person1
console.log(person1); //{ name: 'linda', age: 22 }
