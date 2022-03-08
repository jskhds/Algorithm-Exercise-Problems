let arr = [1,2,3,4]
const sum = arr.reduce((sum,curVal,index,arr)=>{
    console.log('reduce function');
    console.log('sum',sum);
    console.log('curVal',curVal);
    console.log('index',index);
    console.log('arr',arr);
    return sum + curVal
},0)
 
console.log('final sum',sum);
