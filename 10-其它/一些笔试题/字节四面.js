// 闭包实现 
// sum(1)(2,3)(5,6)() // 4
// sum(1,2) //3


// function getSum(...args){
//     let sum = 0;
//     for(let i = 0;i<args.length;i++){
//         sum += args[i];
//     }
//     return function getTempSum(...args){
//         if(!args.length) return sum;
//         else{
//             for(let i = 0;i<args.length;i++){
//                 sum += args[i];
//             }
//             return function(...args){
//                 if(!args.length) return sum;
//                 else{
//                     for(let i = 0;i<args.length;i++){
//                         sum += args[i];
//                     }
//             }
              
                    
//         } 
        
//     }
//     }}



function getSum(sum = 0,...args){   
    for(let i = 0;i<args.length;i++){
        sum += args[i];
    }
    return function getTempSum(...args){ 
        if(!args.length) return sum;
        return getSum(sum,...args);    
    }
}
const s = getSum(1,2)(3,4)();
console.log(s);


