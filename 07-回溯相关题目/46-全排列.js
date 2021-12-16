/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
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