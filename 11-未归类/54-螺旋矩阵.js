


// let arr = [[1,2,3,4],[4,5,6,7],[7,8,9,10],[11,12,13,14]];
// let len = arr.length;
// console.log(len);
// console.log(arr[0][len-2]);
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let up = 0;
    let right = matrix.length -1;
    let down = matrix.length -1;
    let left = 0;
    const res=[];
    const len = matrix.length;
    for(let i = 0; i< len;i++){
        res.push(matrix[0][i]);
        
    }
   console.log(res); 
};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
// 一轮： 从数组的00 到 0 L-1 触及右 往下 到L-1 L-1 触及下  往左 到 L-1 0 往上 到 10 把这些数添加到res中
// 并且从原数组删掉 再来一次 直到 遍历完 就是L = 1