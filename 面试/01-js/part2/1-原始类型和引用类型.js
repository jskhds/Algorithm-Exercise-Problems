//  原始类型：num str Boolean undefined null
//  引用类型：对象 包括Array Date Math

// 1.赋值
// 原始类型赋值，赋的是值，相互之间互不影响
let str1 = "hello"
let str2 = "world"
str2 = str1;
str1 = "world"
console.log(str1);
console.log(str2);

//  引用类型赋值，赋的是引用 一个引用变了，同一个引用的值也会变
// 或许可以理解为 赋给对方的是自己的地址，所以另一个变了，自己也会变
let stu1 = {name:"xiaoming"}
let stu2 = stu1;
stu2 = {name:"xiaohong"}
console.log(stu1);
console.log(stu2);

// 2.比较
// 原始类型 值之间比较 值相同就是true
let str3 = "hong";
let str4 = "hong";
console.log(str3 === str4); //true
// 引用类型，引用之间比较
let stu3 = {name:"xioahong"};
let stu4 = {name:"xioahong"};
console.log(stu3 === stu4); //false
//如果把stu3的引用赋值给stu4 那么二者才能相等 
stu4 = stu3;
console.log(stu3 === stu4); //true

// 传参
// 原始类型传参，传的是值，不会改变自己
let num = 1;
function fn(n){
    n = 100;
    return n;
}
console.log(fn(num)); //100
console.log(num); //1
// 引用类型传参传递是引用 会改变自己
let arr = [1,2,3]
function fn1(arr){
    arr.push(10)
    return arr;
}
  
 console.log(fn1(arr)); //[1,2,3,10]
 console.log(arr); //[1,2,3,10]