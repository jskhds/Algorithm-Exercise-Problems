/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 可以看代码随想录的题解 我觉得很清楚
 var minDistance = function(s,t) {
    // dp定义：dp[i][j] 前s的前i-1个变到 t前 j-1 个所需要的最小步数
    let dp = new Array(s.length+1).fill(0).map(x=>new Array(t.length+1).fill(0))
    // 初始化 dp[0][j] dp[i][0]
    for(let i = 1;i<=s.length;i++){
        dp[i][0] = i
    }
    for(let j = 1;j<=t.length;j++){
        dp[0][j] = j
    }
    for(let i = 1;i<=s.length;i++){
        for(let j = 1;j<=t.length;j++){
            if(s[i-1]===t[j-1]){
                dp[i][j] = dp[i-1][j-1]
            }
            else{
                // 要么 s 删除（等同于t添加）
                // 要么 t 删除 （等同于s添加）
                // 要么 替换 也就是 前i-2和前j-2的次数 加上一个替换的次数就可以了
                dp[i][j] = Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+1)
            }
        }
    }
    return dp[s.length][t.length]

};