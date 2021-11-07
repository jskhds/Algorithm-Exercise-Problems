   // 双指针遍历
var search = function(nums, target) {
    let left = 0,right = nums.length - 1;
    while(left<=right){
        if(nums[left] == target) return left;
        if(nums[right]== target) return right;
        left++;
        right--;

    }
    return -1;
};
// 二分法 有序无重复数组 左闭右闭
var search1 = function(nums, target) {
   let left = 0,right = nums.length - 1;
   while(left<=right){
    //    注意要写成left + ((right-left)/2) 防止溢出
       let middle = parseInt(left + ((right-left)/2));
       if(target<nums[middle]){
            right = middle-1;
       }
      else if(target>nums[middle]){
            left = middle+1;
       }
       else {
           return middle;
       }

   }
   return -1;
    
};
// 左闭右开二分法 把middle更新成right 在下一个查找时 不会比较right值
var search2 = function(nums, target) {
    let left = 0,right = nums.length;
    while(left<right){
        let middle = parseInt(left + ((right-left)/2));
        if(target<nums[middle]){
             right = middle;
        }
       else if(target>nums[middle]){
             left = middle+1;
        }
        else {
            return middle;
        }
 
    }
    return -1;
     
 };
let nums = [1,2,3,4,5,6];
let target = 4;
console.log(search2(nums,target));
const res = parseInt(3/2); //向下取整？
console.log(res);