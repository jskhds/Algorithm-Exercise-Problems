// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

var lengthOfLIS = function(nums) {
    // dp[i] 第 i 个元素位置最长的严格递增序列长度
    // 如果 nums[i] < nums[i + 1] 那么，dp[i] = dp[i - 1] + 1; 不然 dp[i] = dp[i - 1]?
    let dp = new Array(nums.length).fill(1);
    let res = 1;
    for(let i = 1;i<nums.length;i++){
        // nums[i] 要和其前面的每一个值都比较一遍
        for(let j = 0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = dp[i] > res?dp[i]:res;
    }
    return res;
    
};