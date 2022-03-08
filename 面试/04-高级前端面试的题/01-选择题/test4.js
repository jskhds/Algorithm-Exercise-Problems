// 第一题
// 赋值的时候直接赋一整个对象，是引用赋值

// 第二题 答案 仍然会每一秒钟调用1次
// let config = {
//     alert:setInterval(()=>{
//         console.log("alert");
//     },1000)
// }
// config = null;
// 解析：因为一般来说，我们把一个对象赋值为null以后，这个对象就会被垃圾回收,因为已经没有这个对象的引用了
// 但是config 里的参数是一个函数，仍然保留着对config的引用，所以不会被回收

// 第三题
const settings = {
    username:'linda',
    age:20,
    health:90
}
const data = JSON.stringify(settings,['age','health'])  
//JSON.stringify的第二个参数是替代者，可以是数组也可以是函数，用来判断哪些值会被转换为字符串
// 如果是函数，那么会遍历对象的每一项，返回值为这些项的属性值 Chrome下会有错误
console.log(data);

// 第四题
// 常规函数自带一个prototype，是一个带有constructor属性的对象 {constructor} 箭头函数没有prototype，访问返回undefined

// 第五题 输出为 name age 
const person ={
    name:"linda",
    age:18
};
// 这一句for-in 遍历 的是对象的属性名 （for-in用对象的属性名进行迭代）
for(const item in person){
    console.log(item);
}

// 第六题
// object.freeze 只能冻住浅拷贝

// 第七题
// 主要是import和require的区别 import文件时，被导入的文件先编译执行，导入模块的文件后执行
// requie相反

// 第八题 考点隐式转换
const a ={}
const b = {key:'b'}
const c = {key:'c'}
a[b] = 123; //a['Object object'] = 123
a[c] = 456;//a['Object object'] = 456
console.log(a[b]); //456

// 第九题 考的很偏 是分号的问题
function nums(a,b){
    if
    (a>b)
    console.log('a');
    else
    console.log('b');
    return //return 是新的一行 JavaScript引擎会自动在后面添加分号 实际上永远访问不到a+b
    a + b
}


