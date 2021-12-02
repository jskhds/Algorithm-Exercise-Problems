// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力法
 var maxSubArray = function(nums) {
    let sum = nums[0];
    let max = nums[0];
    if(nums.length == 1){
        return nums[0]
    }
    else{
      for(let i =1;i<nums.length;i++){
          sum = sum + nums[i];
          sum = sum >= nums[i] ? sum :nums[i];
          max = max >= sum ? max : sum;
          }
          return max;
    }
     
  };

//   动态规划
