function searchK(arr, k) {
    let total = [];
    for(let i = 1;i<=1000;i++){
        total.push(i)
    }
    let count = arr[arr.length - 1] - arr.length;
    if(k>count){
        return arr[arr.length - 1] + k - count;
    }
    let missNum = [];   
    for(let i = 1;i<arr.length;i++){
        if(arr[i]-arr[i-1]>1){
            let minus = arr[i]-arr[i-1];
            for(let j = 1;j<minus;j++){
                missNum.push(arr[i-1]+j);
            }            
        }
    }
    console.log(missNum)
    return missNum[k-1];
}
