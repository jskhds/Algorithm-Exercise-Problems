var obj = { 0: 'a', 1: 'b', length: 2 }; // 伪数组
var arr = Array.prototype.slice.call(obj); // 转化为数组    
console.log(arr);  // 返回["a","b"]

/*
function slice(obj) {
    var arr =[];
    var len = obj.length; // length 正好对应伪数组中的length属性
    for(var i = 0;i < len;i++){
        arr.push[i] = obj[i]; // i 正好对应伪数组中的索引值
    }
    return arr;
}

*/