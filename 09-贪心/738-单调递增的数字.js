/**
 * @param {number} n
 * @return {number}
 */
 var monotoneIncreasingDigits = function(n) {
    //  这道题从前往后遍历的话 不是特别好 比如说332 3>2 把3减1 2变成9 答案=329 这时3又大于2了
    //  但我们已经在往后遍历管不到第0个3 所以还要判断前面有没有数字和当前point的一样 这样变得很复杂
    let arr = n.toString().split("").map(Number);
    let point = -1;
    let len = arr.length;
    for(let i = 1;i<len;i++){
        if(arr[i-1]>arr[i]){
            point = i - 1; // 1  
            for(let j = i-2;j>=0;j-- ){
               if(arr[j] == arr[i-1])
               point = j;
            }
            arr[point] -= 1;
            
               
            
        }        
    }
    if(point!=-1){
        for(let i = point + 1;i<len;i++){
            arr[i] = 9;
        }
    }
    let res = arr.toString().replace(/,/g,'');
    return Number(res);
}

// 倒序遍历 不用判断特殊情况
var monotoneIncreasingDigits1 = function(n) {
    let arr = n.toString().split("").map(Number);   
    let len = arr.length;
    let point =len;
    for(let i= len - 1;i>0;i--){
        if(arr[i-1]>arr[i]){
            arr[i-1]--;
            point = i;                        
        }        
    }         
        for(let i = point;i<len;i++){
            arr[i] = 9;
        }    
    let res = arr.toString().replace(/,/g,'');
    return Number(res);
};

let res = monotoneIncreasingDigits1(10); //666799
console.log(res);
 