/**
 * 选定 Pivot 中心轴
 * 将大于 Pivot 的数字放到 Pivot 的右边
 * 将小于 Pivot 的数字放到 Pivot 的左边
 * 分别对左右子序列重复前三步操作
 */

 const sortArray = (nums) =>{
    if(nums.length < 2) return nums;
    quickSort(nums,0,nums.length - 1);
    return nums;
}

const quickSort = (nums, left, right) =>{
   if(left < right){
       let pivotPos = partition(nums, left, right);
       quickSort(nums, left, pivotPos - 1);
       quickSort(nums, pivotPos + 1, right);
   }
}
const partition = (nums,left,right) =>{
    let pivot = nums[left];
    while(left < right){
        while(left < right && nums[right]>=pivot) right--;
        nums[left] = nums[right];
        while(left < right && nums[left]<=pivot) left++;
        nums[right] = nums[left];
    }
    nums[left] = pivot;
    return left;
}
