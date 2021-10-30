/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let sum = 0;   
    let count = k; 
    for(let i = 0;i<k;i++){
        if(nums[i]<0){
           nums[i] = -nums[i];
           count--
       }       
    }
    if(count>0 &&count%2 == 1){
        nums.sort((a,b)=>a-b);
        nums[0] = -nums[0]
    }
    for(let i = 0;i<=nums.length - 1;i++){
        sum += nums[i];
    }
    return sum;
};