/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


// 暴力法
const findLength = (A, B) => {
    const m = A.length;
    const n = B.length;
    let res = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (A[i] == B[j]) { // 遇到相同项
          let subLen = 1;   // 公共子序列长度至少为1
          while (i + subLen < m && j + subLen < n && A[i + subLen] == B[j + subLen]) { //新的一项也相同
            subLen++; // 公共子序列长度每次增加 1，考察新的一项
          }
          res = Math.max(subLen, res);
        }
      }
    }
    return res;
  };
 
//  动态规划
var findLength1 = function(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let res = 0
    // dp[i][j] 由 dp[i-1][j-1] 推导出来 所以遍历要从 i = 1 j = 1 开始
    // dp[i][j] 的定义为 以 i - 1 和 j - 1 为下标的元素最长重复字符串的长度
    let dp = new Array(len1 + 1).fill(0).map(x=>new Array(len2 + 1).fill(0))
    for(let i = 1;i<=len1;i++){
        for(let j = 1;j<=len2;j++){
            if(nums1[i-1]===nums2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1
            }

            res =  Math.max(res,dp[i][j])
        }
    }
    
    return res
}
 
//  动态规划 降维 注意遍历顺序
var findLength2 = function(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    let res = 0
    let dp = new Array(len2 + 1).fill(0)
    for(let i = 1;i<=len1;i++){
        for(let j =len2;j>=1;j--){
            if(nums1[i-1]===nums2[j-1]){
                dp [j] = dp [j-1] + 1
            }
            else dp[j] = 0
            res = Math.max(res,dp[j])
            
        }
    }
    
    return res
}

// https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/solution/zhe-yao-jie-shi-ken-ding-jiu-dong-liao-by-hyj8/