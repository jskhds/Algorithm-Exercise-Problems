var generateMatrix = function(n) {
    let arr  =  Array.from(Array(n),()=>Array(n).fill(0));
    let nums = 1,target = n*n;
    let top = 0,left = 0,right = n-1,bottom = n - 1;
    
    while(nums<=target){
        for(let i = left;i<=right;i++){
            arr[top][i] = nums++;
           
        }
        top++;
        for(let i = top;i<=bottom;i++){
            arr[i][right] = nums++;
           
        }
        right--;
        for(let i = right;i>=left;i--){
            arr[bottom][i] = nums++
        }
        bottom--;
        for(let i = bottom;i>=top;i--){
            arr[i][left] = nums++
        }
        left++;
    }
    
    return arr;
};