// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
// 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] 
// （若两个四元组元素一一对应，则认为两个四元组重复）：
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    const len = nums.length;
    if(len<4) return [];
    nums.sort((a,b)=>a-b);
    const res = [];
    for(let i = 0;i<len-3;i++){
        if(i>0&&nums[i]===nums[i-1]) continue;
        for(let j = i+1;j<len-2;j++){
            if(j>i+1&&nums[j] ===nums[j-1]) continue;
            let l=j+1,r=len-1;
            while(l<r){
                const sum = nums[i]+nums[j]+nums[l]+nums[r];
                if(sum>target) {r--;continue;}
                if(sum<target) {l++;continue;}
                res.push([nums[i],nums[j],nums[l],nums[r]]);
                while(l<r&&nums[l]===nums[++l]);
                while(l<r&&nums[r]===nums[--r]);
            }
        }
    }
    return res;
};
 