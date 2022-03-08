let arr = [[1, 2, 3], [4, 5, 6], [7, [8, 9]]];
let arr1 = [[1, 2, 3], [4, 5, 6], [7, [8, 9]]];
let arr2 = [[1, 2, 3], [4, 5, 6], [7, [8, 9]]];
// 1.字符串法
// 隐式转换，转换为字符串
arr += '';
// 用逗号隔开
arr = arr.split(',');
console.log(arr);
// 2.flat法
console.log(arr1.flat(Infinity));
// 3.递归法 foreach 的用法有点像Vue实例的用法
//  Vue(function(){})

newArr = [];

function dimeReduction(arr) {
    arr.forEach(
        function recursion(item) {
            if (Array.isArray(item)) {
                dimeReduction(item);
            }
            else {
                newArr.push(item);
            }

        }
    )
    return newArr;
}
console.log(dimeReduction(arr2));

// 箭头函数写法 
/*const newArr = [];
const ergodic = (arr) => {
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            ergodic(item);
        } else {
            newArr.push(item);
        }
    })
    return newArr;
}
console.log(ergodic(arr2, newArr));*/