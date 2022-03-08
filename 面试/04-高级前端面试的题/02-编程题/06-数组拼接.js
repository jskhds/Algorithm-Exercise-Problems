let arr1 = ['A1', 'B1','B2','C1','C2'];
let arr2 = ['A','B','C'];
let newArr = arr1.concat(arr2);
newArr.sort((a,b)=>a.charCodeAt() - b.charCodeAt());
console.log(newArr);

