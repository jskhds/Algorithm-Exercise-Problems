//  会超时
    var maxSlidingWindow = function(nums, k) {
        let stack = [];
        let res = [];
        let start = 0;
        let end = k;
        while(end<=nums.length){
        for(let i = start;i<end;i++){
            stack.push(nums[i])
        }
        res.push(stack.sort((a,b)=>b-a).shift());
        stack = [];
        start++;
        end++;
        }
        
        return res;
    };

const res = maxSlidingWindow( [1,3,-1,-3,5,3,6,7],3)
console.log(res);