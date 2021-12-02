/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) { 
    let dp = new Array(s.length).fill(false).map(x=>new Array(s.length).fill(false))
    if(s.length<2) return s
     let res = 0
     let start  = 0
     let end = 0
     for(let i = s.length-1;i>=0;i--){
         for(let j = i;j<s.length;j++){
             if(s[i]===s[j] &&(j-i<=1||dp[i+1][j-1])){                           
                     dp[i][j] = true
                     if(res<j-i){
                         res = j-i 
                         start = i
                         end = j
                 
                     }
                     
             }
         }
 
     }
    
     return s.substring(start,end + 1)
 };
  