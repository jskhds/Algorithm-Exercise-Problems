 let message = "aacbbccc";
 let arr = message.split('');
 let copyArr = [];
 let keys = new Array(arr.length).fill(1)
 for(let i = 0;i<=arr.length - 1;i++){
      for(let j = i + 1;j<=arr.length - 1;j++){
        if(arr[i] == arr[j]){
             
            keys[i]++;
        }
      }
 }
console.log(arr);
 console.log(keys);
