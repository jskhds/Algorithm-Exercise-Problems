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
        for(right;right>=left;right--){
            arr[bottom][right] = nums++
        }
        for(bottom;bottom<=top;bottom++){
            arr[bottom][left] = nums++
        }
    }
    
    return arr;
};