let arr = [7,9,1,5,10,20,30,0]

function merge(arr, L, M, R){
    let leftArr = arr.slice(L, M)
    let rightArr = arr.slice(M, R+1)
    // 注意这个地方 k = L 代表在原数组的索引从 L 开始
    let i = 0, j = 0, k = L
    while( i <leftArr.length && j <rightArr.length ){
        if(leftArr[i]<=rightArr[j]){
            arr[k++] = leftArr[i++]       
        }else{
            arr[k++] = rightArr[j++]
        }
    }
    // 没有比到的
    while(i<leftArr.length){
        arr[k++] = leftArr[i++]   
    }
    while(j<rightArr.length){
        arr[k++] = rightArr[j++]      
    }

}

function mergeSort(arr,L,R){
    
    if(L==R) {
        return
    }
    else{
        let M = Math.floor((R+L)/2)
        mergeSort(arr,L,M)
        mergeSort(arr, M + 1,R)
        merge(arr, L, M + 1, R)
    }

}
 mergeSort(arr,0,7)
 console.log(arr);
 