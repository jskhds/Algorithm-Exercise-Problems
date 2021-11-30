/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划 只需要考虑前一个状态就可以了
 var findLengthOfLCIS = function(nums) {
    if(nums.length === 0) return 0
    let dp = new Array(nums.length).fill(1)
    for(let i = 1;i<nums.length;i++){
        if(nums[i - 1]<nums[i]){
            dp[i] = dp[i-1] + 1
        }
        
    }
    return Math.max(...dp)
};

   // 贪心 拿一个变量count记录就行
   var findLengthOfLCIS = function(nums) {
    if(nums.length === 0) return 0
    let count = 1,result = 1
    for(let i = 1;i<nums.length;i++){
        if(nums[i - 1]<nums[i]){
            count++
        }
        else{
            count = 1
        }
        result = Math.max(result,count)
    }
    return result
};
