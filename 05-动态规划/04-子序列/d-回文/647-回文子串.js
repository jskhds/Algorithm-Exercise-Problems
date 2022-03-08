// 判断一个数组里有多少个回文子串

// 1.动态规划
// dp 数组定义为一个二维布尔数组 dp[i][j] 表示 下标 i 到下标 j 的字符串是不是回文字符
// 分两种情况 如果 s[i]!==s[j] dp毫无疑问是false
// 如果 s[i] === s[j] 当 i === j 的时候，dp直接置为 true res++
// 当 j>i 的时候，需要判断 i+1 到 j-1 是不是回文字符串 如果是 dp直接置为 true res++
// 遍历顺序 由于dp[i][j] 由dp[i+1][j-1]推导出来，在左下角 所以遍历顺序从下到上 从左到右 
var countSubstrings = function(s){
    let dp = new Array(s.length).fill(flase).map(x=>new Array(s.length).fill(false))
    let res = 0
    for(let i = s.length-1;i>=0;i--){
        for(let j = i;j<s.length;j++){
            // s[i]===s[j] 的情况，要么i和j相等，比如说 'a' 是回文子串
            // 如果 j-i = 1; 'aa' 也是回文子串
            // 其它情况，需要判断 dp[i+1][j-1] 是不是 true
            // 由于需要从 dp[i+1][j-1]推出来，所以遍历顺序为 倒序加顺序，可以画一个图，dp[i+1][j-1] 在 dp[i][j] 的左下角
            if(s[i]===s[j] &&(j-i<=1||dp[i+1][j-1])){              
                    res++
                    dp[i][j] = true
                
            }
        }
    }
    return res
}
// 空间复杂度和时间复杂度都是 n^2

// 双指针法 不是很懂 https://leetcode-cn.com/problems/palindromic-substrings/solution/liang-dao-hui-wen-zi-chuan-de-jie-fa-xiang-jie-zho/
 
//  可以由单个 i 为中心 也可以由 i 和 i+1 为中心
var countSubstrings = function(s) {
    let res = 0
    for(let i = 0;i<s.length;i++){
        res += extend(s,i,i,s.length)
        res += extend(s,i,i+1,s.length)
    }

    
return res
};
function extend(s,i,j,len){
        let res = 0
        while(i>=0&&j<len && s[i]===s[j]){
               i--
               j++
               res++
        }
      return res
}

 
 