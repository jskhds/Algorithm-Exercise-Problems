/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// leetcode 有写笔记
 var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b)
    
    let res = nums[0] + nums[1] + nums[nums.length - 1]
    for(let i = 0;i<nums.length - 2; i++){
        let n1 = nums[i]
        let left = i + 1
        let right = nums.length - 1
        while(left < right){
            let sum = n1 + nums[left] + nums[right]
            if(sum > target){
                right--
            }
            else{
                left++
            }
            if(Math.abs(sum - target) < Math.abs(res - target)){
                
                res = sum
            }
        }
        
    }
    return res
};