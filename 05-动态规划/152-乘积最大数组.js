/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    // 要考虑 负负得正 的情况
    let min = nums[0]
    let max = nums[0]
    let res = nums[0]
    let temp1 = 0, temp2 = 0
    for(let i = 1;i<nums.length;i++){
        temp1 = min * nums[i]
        temp2 = max * nums[i]
        min = Math.min(temp1, temp2, nums[i])
        max = Math.max(temp1, temp2, nums[i])
        res = Math.max(max, res)
    }
    return res
};

// https://leetcode-cn.com/problems/maximum-product-subarray/solution/wa-ni-zhe-ti-jie-shi-xie-gei-bu-hui-dai-ma-de-nu-p/