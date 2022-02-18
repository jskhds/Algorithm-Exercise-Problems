// 输入: "sea", "eat"
// 输出: 2
// 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"

// 和找出最长公共序列差不多 只不过返回值不一样 需要返回两个字符串的长度减去重复的部分*2就是需要删除字符的个数
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