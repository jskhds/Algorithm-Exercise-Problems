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

// 详细注释版
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    // 和 583 超级像，首先增加和删除操作可以一起讨论，我增加和你删除其实是一样的。主要就是替换操作，
    let dp = new Array(word1.length + 1).fill(0).map(()=>new Array(word2.length + 1).fill(0));
    for(let i = 0;i<=word1.length;i++){
        // word1 全部删完
        dp[i][0] = i;
    }
    for(let j = 0;j<=word2.length;j++){
        // word2 全部删完
        dp[0][j] = j;
            
    }
    for(let i = 1;i<=word1.length;i++ ){
        for(let j = 1;j<=word2.length;j++){
            if(word1[i-1] === word2[ j - 1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                // 不相同的时候，要么删除word1，要么删除word2，删除代表着以前一个结尾来匹配
                // 要么不删除选择替换，那么就是两者都变成一样的了，同时往前走，此时加操作数
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])  + 1;
            }
        }
    }
    return dp[word1.length][word2.length]

};