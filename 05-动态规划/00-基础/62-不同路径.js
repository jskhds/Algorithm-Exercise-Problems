/**
 * 
 * @param {*} m 
 * @param {*} n 
 * @returns 
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。
 * 机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 */

 var uniquePaths = function(m, n) {
  let dp = new Array(m).fill(1).map(()=>new Array(n).fill(1));
  // 最左边 一种 最上面 一种
  for(let i = 1;i<m;i++){
      for( let j = 1;j<n;j++ ){
          dp[i][j] = dp[i-1][j] + dp[i][j-1] ;
      }   
  }
  return dp[m-1][n - 1];
};


var uniquePaths1 = function (m, n) {
    if (m === 1 || n === 1) {
      return  1
    }
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
  }
  console.log(uniquePaths1(7,3)) // 28