var twoSum = function(nums, target) {
    let i,j;
    let number=[];
    for(i=0;i<nums.length-1;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                number.push(i,j);               
            }
        }
    }
    return number;
};


console.log(twoSum([1,2,3,4],7));