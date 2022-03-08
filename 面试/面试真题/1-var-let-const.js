// // ES5 变量提升
// console.log(a); // undefiend
// var a = 200

// // 相当于 
// var a
// console.log(a); // undefiend
// a = 200

// 块级作用域
for(var i = 0;i<10;++i){
    var j = i + 1
}
console.log(i,j);