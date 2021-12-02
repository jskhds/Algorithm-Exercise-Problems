/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// 动态规划
 var numDistinct = function(s, t) {
    
    // dp[i][j] s的前i-1字符可以匹配t的前j-1字符的数目
    // i==0 s没有字符可以匹配 dp[0][j] = 0
    // j==0 t不需要字符来匹配 dp[i][j] = 1
    let dp = new Array(s.length+1).fill(0).map(x=>new Array(t.length+1).fill(0))
    for(let i = 0;i<=s.length;i++){
        dp[i][0] = 1
    }
    for(let i = 1;i<=s.length;i++){
        for(let j = 1;j<=t.length;j++ ){
            if(s[i-1]===t[j-1]){
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
            }
            else{
                dp[i][j] = dp[i-1][j]
            }
             
        }
    }
   return dp[s.length][t.length]
}

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
    
 