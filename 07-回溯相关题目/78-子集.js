// 回溯
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let res = []
    let path = []
   const backTracking = (startIndex,nums)=>{
       res.push(path.slice())
       for(let i = startIndex;i<nums.length;i++){
           path.push(nums[i])
           backTracking(i+1,nums)
           path.pop()

       }
   }
   
   backTracking(0,nums)
   return res
};