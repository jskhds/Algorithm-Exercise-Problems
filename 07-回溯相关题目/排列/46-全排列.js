// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    // 因为全排列不像组合一样，需要用 startIndex 收敛范围， 所以需要用一个 used 数组来记录哪些数是被使用了的以免重复选取
    let res = []
    let path = []
    let used =   new Array(nums.length).fill(false)
    const backTracking = (nums,used)=>{
        if(path.length === nums.length){
            res.push(path.slice())
            return 
        }
        for(let i = 0;i<nums.length;i++){
            if(used[i] === true) continue
            path.push(nums[i])
            used[i] = true  
            backTracking(nums,used)
            path.pop()
            used[i] = false
        }
    }
    backTracking(nums,used)
    return res
};