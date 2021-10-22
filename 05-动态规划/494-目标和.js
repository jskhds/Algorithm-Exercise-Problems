/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    // 找到left - right = target 的left就行
    let sum = 0;
    for(let i = 0;i<nums.length;i++){
         sum += nums[i];
    }
    // 有一个测试用例 为 [100] -200
    if(sum < Math.abs(target)) return 0;
    const left = (sum + target)/2;
    if (left > sum || (sum + target)%2 == 1) return 0;
    let dp = new Array(left + 1).fill(0);
    dp[0] = 1;

    for(let  i = 0;i<nums.length;i++){
        for(let j = left;j>=nums[i];j--){
            dp[j] += dp[j - nums[i]];
        }

    }
    return  dp[left] ;
    
};