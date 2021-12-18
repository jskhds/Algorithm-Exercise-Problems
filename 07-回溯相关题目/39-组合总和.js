/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * 回溯算法 如果是一个集合里面选，就需要 startIndex, 因为同一个集合需要不断缩窄选择范围，以便枚举
 * 如果是多个集合里面各自选择，没有影响，就不需要startIndex，看是否符合条件就行
 *
 */

 var combinationSum = function(nums, target) {
    let res = []
    let path = []
    const backTracking = (nums,target,sum,startIndex)=>{
        if(sum === target){
            res.push(path.slice())
            return
        }
        if(sum > target){
            return 
        }
        for(let i = startIndex;i<nums.length;i++){
            sum += nums[i]
            path.push(nums[i])
            backTracking(nums,target,sum,i)
            sum -= nums[i]
            path.pop()
        }   
    }
    backTracking(nums,target,0,0)
    return res
};


 // 剪枝优化
 var combinationSum = function(nums, target) {
   
    let res = []
    let path = []
    // 如果用剪枝的话 需要排序 因为要用 sum+nums[i]>target 的时候跳出循环，如果不排序的话不能确保后面的sum+nums[i]都大于 target
    nums =  nums.sort((a,b)=>a-b)
    const backTracking = (nums,target,sum,startIndex)=>{
        if(sum === target){
            res.push(path.slice())
            return
        }
        for(let i = startIndex;i<nums.length&&sum+nums[i]<=target;i++){
            sum += nums[i]
            path.push(nums[i])
            backTracking(nums,target,sum,i)
            sum -= nums[i]
            path.pop()
        }   
    }
    backTracking(nums,target,0,0)
    return res
};