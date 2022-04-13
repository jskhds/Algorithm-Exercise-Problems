// 从开头到结束 找到最短路径

function findMin(matrix){
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = new Array(m + 1).fill(Infinity).map(()=>new Array(n + 1).fill(Infinity));
    for(let i = 0;i<=m;i++) dp[i][0] = 0;
    for(let i = 0;i<=n;i++) dp[0][i] = 0;
    for(let i = 0;i<m;i++) dp[i+1][1] = dp[i][1] + matrix[i][0];
    for(let i = 0;i<n;i++) dp[1][i+1] = dp[1][i] + matrix[0][i];
    for(let i = 1;i < m;i++){
        for(let j = 1;j <n;j++){
            dp[i+1][j+1] = Math.min(dp[i][j+1] , dp[i+1][j]) + matrix[i][j];  
        }      
    }
    return dp[m][n]
}
const matrix = [[1,2,3],[10,10,10],[10,10,1]];
 const res = findMin(matrix);
 console.log(res);

