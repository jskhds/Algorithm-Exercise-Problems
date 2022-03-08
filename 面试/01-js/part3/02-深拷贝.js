function deepClone(obj){
    if(typeof(obj)!=='object' || typeof(obj) == null){
        return obj;
    }
    let res = obj instanceof Array?[]:{};
    for(let key in obj){
        // 确保key不是原型链上的
        if(obj.hasOwnProperty(key)){
            // 递归 key要一层一层遍历，比如说 obj{ address:{city: 'Beijing'}}
            res[key] = deepClone(obj[key])
        }
    }
    
    return res;
    
}

let obj1 = {
    address:{
        city:"Beijing"
    }
}

let obj2 = deepClone(obj1);
obj2.address.city = "Shanghai";
console.log(obj1.address.city);
console.log(obj2.address.city);