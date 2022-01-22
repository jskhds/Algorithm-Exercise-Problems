/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 将 m*n 的矩阵顺时针输出
 var spiralOrder = function(matrix) {
    if(matrix.length===0) return []
    let res = []
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    while(top<bottom && left<right){
        // top level 
        for(let i = left;i<right;i++){
            res.push(matrix[top][i]) 
        }
        // right level
        for(let i=top;i<bottom;i++){
            res.push(matrix[i][right])
        }
        // bottom level
        for(let i = right;i>left;i--){
            res.push(matrix[bottom][i])
        }
        // left level 
        for(let i = bottom;i>top;i--){
            res.push(matrix[i][left])
        }
        right--
        top++
        bottom--
        left++  // 四个边界同时收缩，进入内层
         
    }
    // 可能有只剩一个的情况 所以要用 if else if 语句
    // 剩一行
    if(top === bottom){
        for(let i = left;i<=right;i++){
            res.push(matrix[top][i])
        }
    }
    // 剩一列
    else if(left === right){
        for(let i = top;i<=bottom;i++){
            res.push(matrix[i][left])
        }
    }
    return res
};