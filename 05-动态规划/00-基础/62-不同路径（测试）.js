function findDiff(m,n) {
    const dp= new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i = 0;i<m;i++)  dp[i][0] =1; 
    for(let j = 0;j<n;j++) dp[0][j] =1;   
    // 到达第i行j列 格子有 dp[i][j]种走法 上面的格子往下走 加上 左边的盒子往右走
    for( i = 1;i<m;i++){
        for(j = 1;j<n;j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }       
    }  
    return dp
}
const res = findDiff(3,7);
console.log(res);