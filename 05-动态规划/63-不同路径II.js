// 有障碍时的不同路径
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length,n = obstacleGrid[0].length;
    const dp = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    // 这里有一个小细节 顶行和最左列 一旦碰到障碍物 障碍物包括之后的dp值都是零 所以要在obs === 0 的条件不满足的时候 跳出循环
    for(let i = 0;i<m&&obstacleGrid[i][0]==0;i++) dp[i][0] = 1;
    for(let j = 0;j<n&&obstacleGrid[0][j]==0;j++) dp[0][j] = 1;
    for(i=1;i<m;i++){
        for(j=1;j<n;j++){
            // 碰到障碍 不赋值
           if(obstacleGrid[i][j]===1) continue;
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
            
        }
    }
    return dp[dp.length-1][dp[0].length-1];
};

const res = uniquePathsWithObstacles([[0,0],[0,1]]);
console.log(res);