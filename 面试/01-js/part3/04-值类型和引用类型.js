const obj1 ={
    x:100,
    y:200
} 
const obj2 = obj1
let x1 = obj1.x
x1 = 102
obj2.x = 101
console.log(obj1.x);
