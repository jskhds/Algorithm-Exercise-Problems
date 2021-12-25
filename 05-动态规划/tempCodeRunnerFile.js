/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
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
     
    return s.length + t.length - 2*res
};
let res = minDistance("abc","ahbgdc")
console.log(res);