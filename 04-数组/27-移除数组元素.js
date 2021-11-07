/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let length = nums.length;
    // 暴力法 发现目标值，数组整体前移一位覆盖
    for(let i = 0;i<=length-1;i++){
        if(nums[i] == val){
            for(let j = i + 1;j<=length-1;j++){
                // 注意这里不要写反了 用后面的值覆盖前面的
                nums[j-1] = nums[j];
            }
            
            length--;
            i--;
           

        }

    }
    return  length;
};

// 快慢指针法
var removeElement1 = function(nums, val) {
     let slow = 0;
     for(let fast = 0;fast<nums.length;fast++){
         if(val !== nums[fast]){
            nums[slow++] = nums[fast];
         }
     }
     return slow;
};
