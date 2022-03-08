let arr = [3, 5, 7];
arr.foo = "hello";
console.log(arr);//[ 3, 5, 7, foo: 'hello' ]
// for in 遍历属性
for (let i in arr) {
    console.log(i); // 输出 "0", "1", "2", "foo"
}
// for of 遍历可以迭代的元素值 迭代属性挂载在原型上 有这个属性就可以迭代用for of
for (let i of arr) {
    console.log(i); // 输出 "3", "5", "7"
}