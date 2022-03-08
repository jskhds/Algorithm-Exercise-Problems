var data = {
    a:1,
    b:2,
    c:3
}
// 遍历输出属性名
console.log(Object.keys(data));

// Object.keys(data).forEach 把数组的每一项给回调函数
// forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
// forEach()先拿到data的属性名，然后通过data[属性名]打印data的属性值
 
Object.keys(data).forEach(function(key){
    console.log(data[key]);
})
