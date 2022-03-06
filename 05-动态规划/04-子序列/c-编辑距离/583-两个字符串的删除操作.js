// 输入: "sea", "eat"
// 输出: 2
// 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"

// 1.和找出最长公共序列差不多 只不过返回值不一样 需要返回两个字符串的长度减去重复的部分*2就是需要删除字符的个数
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(s, t) {
    let res = 0
    let dp = new Array(s.length+1).fill(0).map(x=> new Array(t.length + 1).fill(0))
     for(let i = 1;i<=s.length;i++){
         for(let j = 1;j<=t.length;j++){
             if(s[i-1] === t[j - 1]){
                 dp[i][j] = dp[i-1][j-1] + 1
             }
             else {
                 dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
             }
              res = Math.max(res,dp[i][j])
         }
        

     }
     
    return s.length + t.length - 2 * res
};

// 2.编辑距离 删除
/**
 * 1.如果相等，就不用删除 dp[i][j] = dp[i-1][j-1]
 * 2.如果不相等，需要删除。要么删我要么删你要么我们一起删
 * dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1]+1, dp[i-1][j-1] + 2)
 * 3.初始化 dp[i][0] = i dp[0][j] = j
 * 
 */
 var minDistance = function(word1, word2) {
    let dp = new Array(word1.length +1).fill(0).map(()=>new Array(word2.length + 1).fill(0));
    for(let i = 0;i<=word1.length;i++){
        dp[i][0] = i;
    }
    for(let j = 0;j<=word2.length;j++){
        dp[0][j] = j;
    }
    for(let i = 1;i<=word1.length;i++){
        for(let j = 1;j<=word2.length;j++){
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1] + 2);
            }
        }
    }
    return dp[word1.length][word2.length]
};