// 首先在未排序的数列中找到最小(or最大)元素，然后将其存放到数列的起始位置；
// 接着，再从剩余未排序的元素中继续寻找最小(or最大)元素，然后放到已排序序列的末尾。
// 以此类推，直到所有元素均排序完毕。
const sortArr = (arr) =>{  
    let minIndex = 1;
    for(let i = 0;i<arr.length;i++){
        // 注意每次 min 都要重新赋值，要不然当次比较的最小值仍然是上一次的最小值
        let min = Infinity;
        for(let j = i+1;j<arr.length;j++){
            if(min>arr[j]){
                min = arr[j];
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}

let res = sortArr([1,3,5,4,2,1,5,3,8,2])
console.log(res)