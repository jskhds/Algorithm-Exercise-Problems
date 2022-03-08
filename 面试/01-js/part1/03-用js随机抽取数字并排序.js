const array = [];
const json = {};
// 1.产生1~100的数，随机数打乱排序，取前十个
let sort = function (arr) {
    for (i = 0; i <= 100; i++) {
        arr.push(i);
    }
    arr.sort(function (a, b) {
        //sort函数是排序函数，会按照一定规则进行排序 看mdn文档
        // Math.random() 产生0~1之间的随机浮点数
        // return a - b; 意思是比较 a 和 b ， a 比 b 小的话，把 a 排在 b 前面
        return Math.random() - 0.5;
    });
    arr.length = 10;
    console.log(arr.toString());
}
let sotr1 = function (arr) {
    while (arr.length < 10) {
        var k = Math.round(Math.random() * 100);
        // if (!json[k]) {
        //     json[k] = true;
        arr.push(k);
        // }
    }
    console.log(arr.toString());
}




