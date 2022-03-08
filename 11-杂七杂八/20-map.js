const array1 = [1, 4, 9, 16];
// map 的返回值组成一个新数组 我们需要利用新数组时选择map 如果只是为了遍历，那么用for和相关语句更合适
// pass a function to map
const map1 = array1.map(function (item) {
    return item = item * 2;
});
// 箭头函数的写法
const map2 = array1.map(x => x * 2);
console.log(map1);
console.log(map2);
// expected output: Array [2, 8, 18, 32]
