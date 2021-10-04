/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力法
 var findKthLargest = function(nums, k) {
    nums = nums.sort((a,b)=> b-a)
    console.log(nums);
    let res = nums[k - 1];
    return res;
};
// 2 堆排序 小顶堆
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest1 = function(nums, k) {
    var kHeap = nums.slice(0,k);
    makeHeap(kHeap);
    for(let i=k;k<nums.length;k++){
        updateHeap(kHeap,nums[k]);
    };   
    //取k个元素构造小顶堆
    function makeHeap(arr){
        var temp;
        for(let i = Math.floor((arr.length-2)/2);i>=0;i--){
            if(arr.length % 2==0 && 2*i+1 == arr.length-1){
                if(arr[2*i+1]<arr[i]){
                    temp = arr[i];
                    arr[i] = arr[2*i+1];
                    arr[2*i+1] = temp;
                }
            }else{
                if(arr[2*i+1]<=arr[2*i+2] && arr[2*i+1]<arr[i]){
                    temp = arr[2*i+1];
                    arr[2*i+1] = arr[i];
                    arr[i] = temp;
                    downHeap(arr,2*i+1,arr.length-1);
                }else if(arr[2*i+2]<arr[2*i+1] && arr[2*i+2]<arr[i]){
                    temp = arr[2*i+2];
                    arr[2*i+2] = arr[i];
                    arr[i] = temp;
                    downHeap(arr,2*i+2,arr.length-1);
                }
            }          
        }
    }
    //第i个元素向下 比较 下降
    function downHeap(arr,i,n){
        if(2*i+1>n){
            return;
        }else if(2*i+2 > n){
            if(arr[2*i+1]<arr[i]){
                temp = arr[i];
                arr[i] = arr[2*i+1];
                arr[2*i+1] = temp;                
            }
        }else{
            if(arr[2*i+1]<=arr[2*i+2] && arr[2*i+1]<arr[i]){
                temp = arr[2*i+1];
                arr[2*i+1] = arr[i];
                arr[i] = temp;
                downHeap(arr,2*i+1,arr.length-1);
            }else if(arr[2*i+2]<arr[2*i+1] && arr[2*i+2]<arr[i]){
                temp = arr[2*i+2];
                arr[2*i+2] = arr[i];
                arr[i] = temp;
                downHeap(arr,2*i+2,arr.length-1);
            }
        }
    }
    function updateHeap(heap, item){
        if(heap[0]<item){
            heap[0] = item;
            downHeap(heap,0,heap.length-1)
        }
    }
    return kHeap[0];
};


const res = findKthLargest([3,2,1,5,6,4]
    ,2);
console.log(res);