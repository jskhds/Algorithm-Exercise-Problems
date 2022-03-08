/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let sum = nums[0];
  let max = nums[0];
  if(nums.length == 1){
      return nums[0]
  }
  else{
    for(let i = 1;i<nums.length;i++){
        sum = sum + nums[i];
        sum = sum >= nums[i] ? sum :nums[i+1];
        max = max >= sum ? max : sum;
        }
        return max;
  }
   
};
const res = maxSubArray( [5,4,-1,7,8]);
console.log(res);