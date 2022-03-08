arr = [1,4,32,45555,24,645,435,35,53,43];
for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr.length - i;j++){
        if(arr[i]<arr[j])
         [arr[i],arr[j]] = [arr[j],arr[i]];
    }
}

console.log(arr);