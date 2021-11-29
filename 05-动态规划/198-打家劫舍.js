/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    // dp[i] 包括第 i 家以前的房屋所能偷到的最大金额
    // 决定dp[i] 的关键就是 第 i 家要不要偷  
    // 如果偷 i 那么就是 dp[i-2] + i 的金额
    // 如果不偷 i 那么 dp[i] = dp[i-1] 注意i-1 不一定要偷
    let dp = new Array(nums.length).fill(0)
    // dp 数组初始化
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    // 因为dp 由 dp[0] 和 dp[1] 推导而来 所以用前序遍历 注意从下标2开始
    for(let i = 2;i<nums.length;i++){
        dp[i] = Math.max(dp[i-2]+ nums[i],dp[i-1])
    }
    return dp[nums.length - 1];
};