function nextPermutation(nums) {

    let i =  findI(nums);   
    let k = i+1; 
    nums = swap(i,nums);
    nums = sort(k,nums);
    return nums;
    
}


 // 先找到 第一个右边大于左边的数 如果不存在 nums保持不变 
 function findI(nums) { // 已经test过
     let i = nums.length - 2;
    while(i>=0){
         if (nums[i+1]>nums[i])
         return i
         else i--
     }
   return -1
 }
// 交换 拿到i 之后 我们需要交换 i 和 i + 1
function swap(i,nums) {   
    let j = nums.length-1;
    if(i == -1 ) nums = nums.sort((a,b)=>a-b);
    else
    {
       
        while(j>0){
            if(nums[j] > nums[i]) {
                [nums[j], nums[i]] = [nums[i], nums[j]] ;
                break;
            } 
            else j--;
        }

    }
    
  
    return nums;
}

// 交换以后 把 i 之后的数处理为升序
function sort(k,nums) {
    let i = k;
    len = nums.length  ;
    for (i; i <len; i++) {
        for (j = i; j > k; j--) {
            if (nums[j] < nums[j - 1]) {
                const temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
    
            }
        }
    
    }
    return nums;
}

 const res = nextPermutation([1,3,2]);
 console.log(res);
    
 























/*function nextPermutation(nums) {
    let i = nums.length - 2;                   // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
    while (i >= 0 && nums[i] >= nums[i + 1]) { // 寻找第一个小于右邻居的数
        i--;
    }
    if (i >= 0) {                             // 这个数在数组中存在，从它身后挑一个数，和它换
        let j = nums.length - 1;                // 从最后一项，向左遍历
        while (j >= 0 && nums[j] <= nums[i]) {  // 寻找第一个大于 nums[i] 的数
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]; // 两数交换，实现变大
    }
    // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
    let l = i + 1;           
    let r = nums.length - 1;
    while (l < r) {                            // i 右边的数进行翻转，使得变大的幅度小一些
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
    return nums
}


const res = nextPermutation([5,2,1,3]);
console.log(res);
*/