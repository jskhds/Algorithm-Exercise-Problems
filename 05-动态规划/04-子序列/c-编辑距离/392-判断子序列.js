// 输入：s = "abc", t = "ahbgdc"
// 输出：true
// 
var isSubsequence1 = function(s, t) {
    let flag = false
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
     if(res === s.length) flag = true
    return flag
}

// 动规简化 （编辑距离）

var isSubsequence2 = function(s, t) {
    let flag = false
     
     let dp = new Array(s.length+1).fill(0).map(x=> new Array(t.length + 1).fill(0))
     for(let i = 1;i<=s.length;i++){
         for(let j = 1;j<=t.length;j++){
             if(s[i-1] === t[j - 1]){
                 dp[i][j] = dp[i-1][j-1] + 1
             }
             else {
                //  因为如果不相等的话 i 不用动 只要j往后移动就可以了 所以此时的 dp[i][j]可以用左边的值代替，
                // 因为此时它只需要 j 这个维度就能推出来
                 dp[i][j] =  dp[i][j-1]
             }
               
         }
        
     }
     if(dp[s.length][t.length] === s.length) flag = true
    return flag
}

//  双指针
var isSubsequence3 = function(s, t) {
    let [m,n] = [s.length,t.length]
    let i = 0,j = 0
    while(i<m&&j<n){
        // 同样的 i 只在 相等的时候自加， 对于 j 相等时要往后移动，不相等更需要往后移动
        if(s[i] === t[j]){
            i++
        }
        j++
    }
    return i===m
}