/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let slow = 0
    let fast = 1
    while(fast<nums.length){  
        if(nums[slow] !== nums[fast]){ 
            // 有的时候自加有问题，先加 1 试试看 
            nums[slow + 1] = nums[fast]
            slow++
                       
    }
    fast++
}
 return slow + 1
};