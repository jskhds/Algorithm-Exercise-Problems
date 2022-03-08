const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [];
// 1.随机交换
function sort1() {
    for (i = 0; i < arr.length; i++) {
        var rand = parseInt(Math.random() * arr.length);
        console.log(rand);
        /* 这段代码的意思简单来说，就是不停地交换索引值对应的数 假如rand=[2,2,4,3,7,1,9,5,6,3]
        那么第0次交换 arr[0],arr[2] 生成新数组0 [3, 2, 1, 4, 5, 6, 7, 8, 9, 10]
        1: arr[1],arr[2] 新数组 0 再交换生成新数组1 [3, 1,2, 4, 5, 6, 7, 8, 9, 10]
        2: arr[2],arr[4] 生成新数组2 [3, 1,5, 4, 2, 6, 7, 8, 9, 10]
        依次类推 换到退出循环为止 所以生成的随机数重复也没有影响，因为每次进行交换的数组都是不一样的
        */
        var temp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = temp;

    }
    return arr;
}
console.log(sort1(arr));
// 2. Math.random() + sort
function sort2() {
    return (arr.sort(function () { return Math.random() - 0.5; }));
}
console.log(sort2(arr));

// 洗牌算法 基本思路是从最后一个数开始排，排完以后把这个数删去，数组动态长度改变 
// https://www.bilibili.com/video/BV1k7411q7jo?from=search&seid=6217343474712249687
function sort3(arr, newArr) {
    for (i = arr.length; i > 0; i--) {
        var rand = parseInt(Math.random() * arr.length);
        newArr.push(arr[rand]);
        arr.splice(rand, 1);

    }
    return newArr;
}
console.log(sort2(arr, arr1));

