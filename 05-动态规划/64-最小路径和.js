/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let dp= new Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = grid[0][0]
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            // 注意第一行第一列要单独处理  因为只能往下或往右，所以对第一列，只有往下，所以上一个状态只有行减一，
            // 对于第一行，只有往右，上一个状态，只有列减一
            if(i === 0 &&j===0) continue
            else if(i === 0){
                dp[i][j] = dp[i][j-1] + grid[i][j]
            }
            else if(j === 0){
                dp[i][j] = dp[i-1][j] + grid[i][j]
            }
            else{
                dp[i][j]= Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
            }
        }
    }
       return dp[m-1][n-1]                                 
};