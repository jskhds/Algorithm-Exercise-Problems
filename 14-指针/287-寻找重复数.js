// 1.快慢指针
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    // 1.有环链表找环入口
    //  因为值为 1~n，长度为 n + 1，所以可以用值当索引（索引值会重复一次），所以有环入口

     let slow = 0
     let fast = 0
     while(true){
         slow = nums[slow] // slow 跳一步
         fast = nums[nums[fast]]  // fast 跳两步
         if(slow === fast){
             fast = 0
             while(true){
                 if (slow == fast) { // 如果再次相遇，就肯定是在入口处
                    return slow;   // 返回入口，即重复的数
                }
                slow = nums[slow]; // 两个指针每次都进1步
                fast = nums[fast];
             }
         }

     }

};

// 2. 二分法
var findDuplicate = function(nums) {
    // 1.二分查找
    let start = 1;
    let end = nums.length - 1  // length = n + 1 最大数为 n 所以 end = nums.length - 1
    while(start < end){
        let mid = Math.floor((start + end)/2)
        
        let count = 0
        for(let i = 0;i<nums.length;i++){
            if(nums[i]<=mid){
                count++
            }
        }
        if(count > mid){
             end = mid
        }else{
             start = mid + 1
        }


    }

    return start

};