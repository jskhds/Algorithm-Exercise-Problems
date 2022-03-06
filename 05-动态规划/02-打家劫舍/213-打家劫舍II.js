/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 和打家劫舍 1 唯一的不同就是房屋成环了，所以首尾不能都偷
 * 要么偷一次包含首的 要么偷一次包含尾的
 * 注意，数组分割时数组长度最起码要大于等于2，所以数组长度为 1 的就直接返回 nums[0]
 */
 var rob = function(nums) {
    const maxCount = (nums)=>{
        let dp = new Array(nums.length).fill(0);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0],nums[1]);
        for(let i = 2;i<nums.length;i++){
            dp[i] = Math.max(dp[ i - 2] + nums[i], dp[i-1])
        }
        return dp[nums.length - 1]
    }
    if(nums.length === 1) return nums[0];
    let res1 = maxCount(nums.slice(0,nums.length - 1));
    let res2 = maxCount(nums.slice(1,nums.length));
    return Math.max(res1,res2)
    

};