/**
 * 将序列中待排序列分为若干组，每个数字分一组
 * 将若干组两两合并，保证合并后的组是有序的
 * 重复第二步操作直到只剩下一组，排序完成
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    return mergeSort(nums, 0, nums.length - 1)
};

function mergeSort(nums, left, right) {
    if (left >= right) return nums;
    let mid = (left + right) >> 1;
    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right)
    return merge(nums, left, mid, right)
}

function merge(nums, left, mid, right) {
    let ans = [];
    let c = 0, i = left, j = mid + 1;
    while (i <= mid && j <= right) {
        if (nums[i] < nums[j]) {
            ans[c++] = nums[i++];
        } else {
            ans[c++] = nums[j++]
        }
    }
    while (i <= mid) {
        ans[c++] = nums[i++];
    }
    while (j <= right) {
        ans[c++] = nums[j++];
    }
    for (let i = 0; i < ans.length; i++) {
        nums[i + left] = ans[i];
    }
    return nums;
}

