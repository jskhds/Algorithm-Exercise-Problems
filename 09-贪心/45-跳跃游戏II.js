 function minSteps(nums){
    if(nums.length == 1) return 0;
    let begin = 0,end = 0,steps = 0;
    while(end < nums.length - 1){
        let cover = 0;
        for(let i = begin;i<=end;i++){
            cover = Math.max(cover,nums[i]+i);

        }
        begin = end + 1;
        end = cover;
        steps++;
    }
    return steps;
}