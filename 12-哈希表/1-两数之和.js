/**
 * 
 *  
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// map 中 (key,value) map.get得到是value
// 比如说 [1,2,3] 目标值是5
// 5-1 等于4 哈希表里没有4 所以添加(1,0)
// 5-2 等于3 哈希表里没有3 所以添加(2,1)
// 5-3 等于2 哈希表里有2  所以返回(get(2),i(迭代到的索引值))
 var twoSum = function(nums, target) {
    // 哈希表
    let map = new Map();
    for(let i = 0;i<nums.length;i++){
        if(map.has(target- nums[i])){
            return [map.get(target-nums[i]),i];
        }
        else map.set(nums[i],i);
    }

     return [];
};
