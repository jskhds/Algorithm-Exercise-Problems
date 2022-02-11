// 1.合并数组找中位数
// 2.因为是两个正整数的正序排序数组，所以中位数的索引是确定的，所以 ptr1 + ptr2 的值也随之确定，我们只要遍历到中间就可以了
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {   
    // 中位数的位置是确定的 所以 ptr1 + ptr2 的值也可以随之确定
    let ptr1 = 0
    let ptr2 = 0
    let len1 = nums1.length
    let len2 = nums2.length
    let tot = len1 + len2
    let mid = parseInt(tot/2)
    // 因为是正整数数组 所以 start 和 end 要初始化为负数 
    // 如果总长度是奇数,那么 end 就是中位数的位置  如果是偶数 start 和 end 分别是前一个和后一个
    let start = -1, end = -1     
    // 遍历到中间就行了
    for(let i = 0;i<=mid;i++){
        start = end
        // 如果 ptr2 已经大于等于 nums2 的长度了，此时只有 ptr1 可以往后移，不然 nums2 就越界了
        if(ptr1<len1 && ptr2>=len2 || nums1[ptr1] <= nums2[ptr2]){
           end = nums1[ptr1++]
        }else{
           end = nums2[ptr2++]
        }
    }
    if(tot%2 === 0) {
        return (start + end) /2
    }else{
        return end
    }
};

// 降低时间复杂度的做法: + 二分法

