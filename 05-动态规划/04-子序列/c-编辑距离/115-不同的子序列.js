/**
 * 输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
rabbbit
rabbbit
rabbbit

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/distinct-subsequences
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
// 动态规划
 /**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    // 动态规划 选或者不选 遍历到 i 的时候，要么选 s[i] 去匹配 t，要么不选 s[i] 从 s[i - 1] 去匹配
    // dp[i][j] 的含义 长度为以 i -1 为结尾的 s 去匹配以 j -1 结尾的 t
    let dp = new Array(s.length + 1).fill(0).map(()=>new Array(t.length + 1).fill(0));
    // dp[0][j] 和 dp[i][0]
    for(let i = 0;i<=s.length;i++){
        // 用 s[i] 来匹配以 0 - 1 结尾的 t 总是为 1，（空字符串不选即可匹配） 
        dp[i][0] = 1
    }
    for(let i = 1;i<=s.length;i++){
        for(let j = 1;j<=t.length;j++){
            // 碰到相同的，要么就包含自己去匹配，要么就不包含自己去匹配
            if(s[i - 1] === t[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            }else{
                // 不相同时就只能选择不包含自己去匹配
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[s.length][t.length]

};

//  递归 会超时 
 var numDistinct = function(s, t) {
    function recursion(i,j){
        if(j<0){
            return 1
        }
    
        if(i<0){
            return 0
        }
        
        
        if(s[i] === t[j]){
            return  recursion(i-1,j-1) + recursion(i-1,j)
        }
        else{
           return recursion(i-1,j)
        }
    }
      return recursion(s.length-1,t.length-1)
    
    }
    
    // 递归记忆优化 不是很懂
    var numDistinct = function(s, t) {
        const sLen = s.length, tLen = t.length
        memo = new Array(sLen)
        for (let i = 0; i < sLen; i++) {
            memo[i] = new Array(tLen)
            for (let j = 0; j < tLen; j++) {
                memo[i][j] =  -1
            }
        }
        function helper(i, j) {
            if (j < 0) {
                return 1
            }
            if (i < 0) {
                return 0
            }
            if (memo[i][j] !=  -1) { 
                return memo[i][j]
            }
            if (s[i] == t[j]) {
                memo[i][j] = helper(i-1, j) + helper(i-1, j-1)
            } else {
                memo[i][j] = helper(i-1, j)
            }
            return memo[i][j]
        }
        return helper(sLen-1, tLen-1) 
    };
    
 