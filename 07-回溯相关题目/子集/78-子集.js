// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

//  

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]


// 这是我一开始想的是用组合问题来套，实际上我想复杂了，只要每个 path 都添加就可以了

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let res = [[]];
    let path = [];
    function backTracking(start,k){
        if(path.length === k){
            res.push(path.slice());
            return;
        }
        for(let i = start; i<nums.length;i++){
            path.push(nums[i]);
            backTracking(i+1,k);
            path.pop();
        }
    }
    for(let i = 1;i<=nums.length - 1;i++){
        backTracking(0,i);
    }
    
    res.push(nums.slice());
    return res;
};

// 这是实际上的代码
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

