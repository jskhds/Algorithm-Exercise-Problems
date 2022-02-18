/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums == null) return 0
    if(nums.length === 1) return nums[0]
//  规定开始和结束索引
    let len = nums.length;
    let res1 = robRange(nums,0,len-1)
    let res2 = robRange(nums,1,len)
    return Math.max(res1,res2)
};
// 分情况讨论 考虑首或者考虑尾，注意首尾都不考虑的情况已经包括在这两种情况里了，因为考虑不代表必须偷
function robRange(nums,start,end){
    // 数组只有两个的情况
    if(start === end) return nums[start]
    let dp  =   Array(nums.length).fill(0) 
    dp[start] = nums[start]
    dp[start+1] = Math.max(nums[start],nums[start+1])
    for(let i = start+2;i<end;i++){
         dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
    }
    // 返回的索引是end -1 不是 dp.length - 1
    return dp[end - 1]
}
