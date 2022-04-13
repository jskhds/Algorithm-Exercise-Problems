
function merge(nums1,m,nums2,n){
    let i = m - 1;
    let j = n -1;
    // 倒序遍历
    for(let k = m + n - 1;k>=0;k--){
        if(nums2[j] >= nums1[i] || i === -1){
            nums1[k] = nums2[j];
            j--;
        }
        else if(nums1[i] > nums2[j] || j === -1){
            nums1[k] = nums1[i];
            i--;
        }
       
     
    }
    
}