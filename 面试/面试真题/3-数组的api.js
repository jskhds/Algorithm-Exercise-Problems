// let a = [1,2,3]
// console.log(a.pop(),a);  // 3, [1,2] 删除最后一个元素，返回删除的这个元素
 

// let b = [4,5,6]
// console.log(b.shift(),b); // 4, [5,6] 删除第一个元素，返回删除的这个元素
 

// let c = [7,8,9]
// console.log(c.push(10),c);  // 4 [ 7, 8, 9, 10 ]  把元素加到最后面 返回数组的长度
 

// let d = [11,12,13]
// console.log(d.unshift(14),d);  // 4 [ 14, 11, 12, 13 ]  把元素加到最前面 返回数组的长度


//  concat map filter slice 都不会改变原数组 同时返回一个新数组
// let arr = [1,2,3,4]
// let arr1 = arr.concat([5,6,7,8]) // 拼接两个数组
// let arr2 = arr.map( num => num * 3) // 按照一定规则遍历改变元素
// let arr3 = arr.filter( num => num > 2) // 按照一定规则过滤元素
// let arr4 = arr.slice() // 相当于深拷贝原数组
// console.log(arr); // [ 1, 2, 3, 4 ]
// console.log(arr1);  // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr2); // [ 3, 6, 9, 12 ]
// console.log(arr3); // [ 3, 4 ]
// // console.log(arr4); // [ 1, 2, 3, 4 ]

// const arr = [1, 2, 3, 4]
// // slice 纯函数
// const arr1 = arr.slice()  // 深拷贝  [1, 2, 3, 4]
// const arr2 = arr.slice(1,3) // slice(startIndex,endIndex) 左闭右开 [2, 3]
// const arr3 = arr.slice(1)  // slice(startIndex) 从开始截取到最后 [2, 3, 4]
// const arr4 = arr.slice(-2) // slice(负值) 倒数的几个值 [3, 4]

// // splice 非纯函数 三个参数 (startIndex, length, replaceValue) 后两者都是可选的
// const arr5 = arr.splice(1,2,'a','b','c')
// console.log(arr5); // [2, 3]
// console.log(arr); // [ 1, 'a', 'b', 'c', 4 ]

const res = [10,20,30].map(parseInt)
console.log(res);
 
res = [10, 20, 30].map((item,index)=>{
    // parseInt(string, radix);解析一个字符串并返回指定基数的十进制整数
    // 也就是说 把一个 radix 进制的 string 转换为一个十进制数并且输出
    return parseInt(item,index)
})