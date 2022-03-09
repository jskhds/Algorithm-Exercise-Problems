// 把所有的零都移动数组的最后
var moveZeroes = function(nums) {
    const length = nums.length;
     //双指针法, 不等于 0 就交换，两个指针下一次都移动，等于 0 就光移动 i
     let j = 0;
     for(let i = 0;i<length;i++){
         if(nums[i]!==0){
             [nums[i],nums[j]] = [nums[j],nums[i]];
             j++;
         }
     } 
     return nums
 };