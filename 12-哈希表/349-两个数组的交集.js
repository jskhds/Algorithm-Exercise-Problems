// 给定两个数组，编写一个函数来计算它们的交集。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let res = [];
     let arr1 = unique(nums1);
     let arr2 = unique(nums2);
     for(let i = 0;i<arr1.length;i++){
         for(let j = 0;j<arr2.length;j++){
             if(arr1[i] == arr2[j])
             res.push(arr1[i])
         }
     }
     return res;
    
};
// 剔除
function unique(nums){
    nums.sort((a,b)=>a-b);
    let arr = [];
    arr.push(nums[0])
for(let i = 1;i<nums.length;i++){
    if(nums[i] !== nums[i-1]){
        arr.push(nums[i]);
    }
}
    return arr;
}

 
var intersection = function(nums1, nums2) {
    if(nums1.length<nums2.length){
        const temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    const nums1Set = new Set(nums1);
    const resSet = new Set();
    for(let i = nums2.length - 1;i>=0;i--){
        nums1Set.has(nums2[i])&&resSet.add(nums2[i])
    }
    return Array.from(resSet)
    
};