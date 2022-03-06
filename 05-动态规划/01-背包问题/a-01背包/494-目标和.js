/**
 * 输入：nums = [1,1,1,1,1], target = 3
 * 输出：5
 * 解释：一共有 5 种方法让最终目标和为 3 。
 * -1 + 1 + 1 + 1 + 1 = 3
 * +1 - 1 + 1 + 1 + 1 = 3
 * +1 + 1 - 1 + 1 + 1 = 3
 * +1 + 1 + 1 - 1 + 1 = 3
 * +1 + 1 + 1 + 1 - 1 = 3

 */
var findTargetSumWays = function(nums, target) {
    /**
    a-b = target
    a+b = sum
    a = (target + sum) /2
    */
    let sum = 0;
    for(let i = 0;i<nums.length;i++) sum += nums[i];
    if((sum + target)%2 !== 0 ) return 0;
    if(Math.abs(target)>sum) return 0;  
    let middle = (target +sum)/2;
    // 装满 middle 的方法有 dp[middle] 种
    let dp = new Array(middle + 1).fill(0);
    dp[0] = 1;
    for(let i = 0;i<nums.length;i++){
        for(let j = middle;j>=nums[i];j--){
            // 求组合问题的递推公式：
           dp[j] += dp[j - nums[i]];           
        }
    }
 
    return dp[middle];
};