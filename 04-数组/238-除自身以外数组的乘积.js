/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const len = nums.length
    let res =  []
    let k = 1
    for(let i = 0;i<len;i++){
       res[i] = k;
       k = k * nums[i]; 
       
    }
   //  算完一边之后 k = 1
    k = 1;
    for(let i = len - 1;i>=0;i--){
       res[i] *= k; // k为该数右边的乘积。
       k *= nums[i]; // 此时数组等于左边的 * 该数右边的。
    }
    return res
};