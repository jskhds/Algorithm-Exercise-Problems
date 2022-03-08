// 题目1
var num = 8;
var num = 10;
console.log(num); 
//输出10 因为var是全局变量，可以用相同的名称声明不同的值并且保存最新的值，但是let和const是块级作用域，没有这样的功能

// 题目二
const person = {
    name:"linda",
    age:20
}
for(const[x,y] of Object.entries(person)){
    console.log(x,y);
}
// name linda  age 20
// 首先Object.entries返回一个给定对象自身可枚举属性的键值对数组，所以 console.log(Object.entries(person))得到[ [ 'name', 'linda' ], [ 'age', 20 ] ]
// for-of语句，可以遍历迭代数组中的每个元素，x就对应属性名，y就对应属性值

// 题目三
const person1 = {
    name:"linda",
    age:20
}
let city = person1.city;
city = 'Beijing';
console.log(person1); //{ name: 'linda', age: 20 }
// city是不会加到person1里面的，之所以会这样，是因为这里面不存在引用赋值。一开始用person1.city赋值给city时，person里并没有city这个属性，
// 所以let city = 的是一个空值，下面把city另外赋值为'Beijing'也不会改变对象 看下面的示例也可以知道，

const person2 = {
    name:"linda",
    age:20,
    city1:"ShangHai"
}
let city1 = person2.city1;
city1 = 'Beijing';
console.log(person2);//{ name: 'linda', age: 20, city1: 'ShangHai' }city1的值是不会改变的

let person3 = person2; //像这样，直接赋值引用类型就是引用赋值了，改了person3 person2的值也会跟着变
person3.city1 = "Beijing";
console.log(person2);
console.log(person3);
// { name: 'linda', age: 20, city1: 'Beijing' }
// { name: 'linda', age: 20, city1: 'Beijing' }

// 题目四 
async function getData(){
    let p =  await Promise.resolve('i made it 01')
    console.log(p);
}
getData(); //i made it 01
// getData1 这个我不是很懂 大概是async 返回的始终是一个挂起的promise， 并没有解决，then之后才可以输出
async function getData1(){
    return  await Promise.resolve('i made it 02')  
}
const data = getData1();
console.log(data); //Promise { <pending> }
data.then(res=>{console.log(res);}) //i made it 02
// Promise { <pending> }
// i made it 01
// i made it 02

// 题目五
function givePizza(){
    return 'here is pizza'
}
const giveChocolate = ()=>{
    return 'here is chocolate'
}
console.log(givePizza.prototype); //{} 常规函数有prototype，一个带有constructor属性的函数
console.log(giveChocolate.prototype);//undefined 箭头函数没有prototype属性

const obj = {one:"one",two:"two",one:"three"}
console.log(obj); //{ one: 'three', two: 'two' } 相同的属性名，如果后面又声明它的值，则更新代替

let newList = [1,2,3].push(4);
// console.log(newList.push(5)); TypeError:newList.push is not a function 解释如下：
// console.log(newList); 结果是4 .push方法返回的是数组长度而不是数组本身 所以newList更新后的值为数组长度 4

let newList1 = [1,2,3];
newList1.push(4);
console.log(newList1); //[ 1, 2, 3, 4 ]这样才是给数组push值

// 题目8
function getAge(...args){
    console.log(typeof args);
}
getAge(21); //object
// 实际上把21传进去以后 args = [21] 因为...args 返回一个带参数的数组 而数组是一个对象 所以 typeof args 为object

// 题目九
let arr=[[0,1],[2,3]];
arr.reduce(
    (acc,cur) =>{
        return acc.concat(cur);
    },
    [1,2]
);
console.log(arr); //输出  [ [ 0, 1 ], [ 2, 3 ] ] arr是不变的

/**题目十
 * JSON.parse()干了什么？  把json字符串解析为JavaScript的值
 */
const jsonNumber = JSON.stringify(4);
JSON.parse(jsonNumber);
console.log(jsonNumber);//4

const jsonArray = JSON.stringify([1,2,3]); //转换成有效的json字符串
console.log(JSON.parse(jsonArray)); //然后把json字符串转变为有效的JavaScript值 [1,2,3]

const jsonArray1 = JSON.stringify({name:"Linda"})
console.log(JSON.parse(jsonArray1)); //{ name: 'Linda' }


 

