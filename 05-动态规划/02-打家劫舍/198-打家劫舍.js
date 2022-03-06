var rob = function(nums) {
    // dp[i] 到第 i 家可以偷到的最高金额
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0],nums[1]);
    for(let i = 2;i<nums.length;i++){
        // 如果要偷自己，最多只能偷到第 i-2 加自己的金额，
        // 如果不偷自己，就考虑偷到 i-1 家的金额
        // 其实i-2也好 i-1 也好都不一定被偷了，就只是到那一家最大金额而已
        dp[i] = Math.max(dp[i - 1],dp[i-2]+nums[i]);
    }
    console.log(dp);
    return dp[nums.length - 1] ;
};