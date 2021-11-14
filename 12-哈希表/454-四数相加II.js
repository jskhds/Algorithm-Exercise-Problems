/**
 * 
给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
// 有很多种解法 我写的是最朴实的那一种
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map();
    let res = 0;
    for(let i = 0;i<nums1.length;i++){
        for(let j = 0;j<nums2.length;j++){
            let sum1 = nums1[i]+nums2[j];
            // map(和，该值出现的次数)
            if(map.has(sum1)) map.set(sum1,map.get(sum1)+1);
            else map.set(sum1,1);
        }
    }
    for(let i = 0;i<nums3.length;i++){
        for(let j = 0;j<nums4.length;j++){
            let sum2 = -(nums3[i]+nums4[j]);
            if(map.has(sum2)) res+=map.get(sum2);
        }
    }
    return res;
};
 