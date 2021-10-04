const  matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
const target =20;
// 暴力遍历
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
   for(let i = 0;i<m;i++){
       for(let j = 0; j<n;j++){
           if(matrix[i][j] === target)
           return true;
       }
   }
   return false;
};
// 
var searchMatrix1 = function(matrix, target) {
   if( matrix.length === 0 &&  matrix[0].length === 0) return false;
   let i = 0, j =  matrix[0].length - 1;
   while(i <  matrix.length && j >= 0) {
    if(matrix[i][j] == target)  return true;
    else if( matrix[i][j] < target) i++;  //排除一行
    else if( matrix[i][j] > target) j--;  //排除一列
   }
   return false;
};
const res = searchMatrix1(matrix, target)
console.log(res);