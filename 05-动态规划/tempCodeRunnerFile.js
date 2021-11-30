 let nums1 = [1,2,3]
 let nums2 = [1,2,3,5]
 if(nums1.length<nums2.length){
     [nums1,nums2] = [nums2,nums1]
 }
 console.log(nums1);