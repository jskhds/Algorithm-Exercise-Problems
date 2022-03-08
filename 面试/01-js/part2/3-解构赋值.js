// 1.原始类型
// 赋值
[a,b] = [10,20];
console.log(a); //10
console.log(b); //20
// 交换
[a,b] = [b,a];
console.log(a); //20
console.log(b); //10

// 对象解构赋值
let {nname,age} ={
    nname:"xiaoming",
    age :2,
    friend : "xiaogang"
}
console.log(nname);
console.log(age);

function createStu(){
    let name = "xiaoming";
    let age = 17;
    let friend = "xiaohong";
    return {
        name:name,
        age:age,
        friend:friend

    }
}
// 解构赋值可以直接拿到属性值 不需要再写成 obj.name的形式
let {name} = createStu();
console.log(name);