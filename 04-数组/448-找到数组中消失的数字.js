/**
 * @param {number[]} nums
 * @return {number[]}
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
 * 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 */
 var findDisappearedNumbers = function(nums) {  
    const n = nums.length;  
    let res = new Array(n+1).fill(0)
    let len = 0
    for(let i = 0;i<n;i++){
        res[nums[i]] = 1
    }
    
    for(let i = 1;i<=n;i++){
        if(res[i] === 0){
            res[len++] = i  
        }
    }
    res.length = len
    return res;
     
};