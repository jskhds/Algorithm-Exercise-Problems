/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
 const len = s.length;
 const dp = new Array(len + 1).fill(false);
 dp[0] = true;

 for (let i = 1; i <= len; i++) {
   for (let j = i - 1; j >= 0; j--) {    // j去划分成两部分
     const suffix = s.slice(j, i);       // 后缀部分 s[j: i-1]
     if (wordSet.has(suffix) && dp[j]) { // 后缀部分是单词，且左侧子串[0,j-1]的dp[j]为真
       dp[i] = true;
       break;  // dp[i] = true了，i长度的子串已经可以拆成单词了，不需要j继续划分子串了
     }
   }
 }
 return dp[len];

};

// https://leetcode-cn.com/problems/word-break/solution/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai/

// 比较好理解记忆的版本
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
  // dp[i] 长度为 i 的字符串是否可以被拆分为一个或多个在字典中出现的单词 true / false
  // if([j,i]出现在字典里 && dp[j]==true) 那么 dp[i] = true
  // j,i s.slice(j,i+1) dp[i]
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for(i = 0;i<=s.length;i++){
      for(let j = 0;j<wordDict.length;j++){
          if(i - wordDict[j].length>=0){               
              if(s.slice(i-wordDict[j].length,i)===wordDict[j] && dp[i-wordDict[j].length]==true){
                  dp[i] = true
              }
          }
          
      }
  }

  return dp[s.length]
};