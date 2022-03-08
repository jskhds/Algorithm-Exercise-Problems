var subsets = function(nums) {
    let newArray=[];
    // 第一层 子集只有本身 和 一个 的情况
    for(let i=0;i<nums.length;i++){
        let nums1 = nums.splice(i,1);
        newArray.push([nums[i]],[nums1]);
    }
    newArray.push([],nums)
    // 第二层 子集容量依次 为 length-1 到 2
    return newArray;
};
console.log(subsets([1,2,3,4]));
