/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b);
    const res = [];
    const path = [];
    function backTracking(nums,start){
        res.push(path.slice());
        if(start > nums.length) return;
        for(let i = start; i<nums.length;i++){
            if(i>start && nums[i] === nums[i-1]) continue;           
            path.push(nums[i]);
            backTracking(nums, i + 1);
            path.pop();        
        }
    }
    backTracking(nums,0)
    return res;
};