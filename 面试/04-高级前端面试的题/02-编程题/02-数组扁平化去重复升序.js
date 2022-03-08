let arr = [[1,2,3,4],[4,4,5,3,2],[1,4,3,9]];

// solution 1
 function fn1(arr){
     if(arr.length == 0) return -1;
     let flatArr = arr.flat(Infinity);
     let sortArr = flatArr.sort((a,b)=>a-b);
     let newArr = [sortArr[0]];
    //  遍历
    for(let i = 1;i<sortArr.length;i++){
        if(sortArr[i-1]!==sortArr[i]){
            newArr.push(sortArr[i])
        }
    }
    return newArr;
 }

 function fn2(arr){
    //数组扁平化并排序 先变为由,分开的字符串然后转换为数组
    arr = arr.toString().split(',').sort((a,b)=>a-b).map(Number)
    //去重Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。
    return [...new Set(arr)]
 }
 console.log(fn2(arr));
 
 

