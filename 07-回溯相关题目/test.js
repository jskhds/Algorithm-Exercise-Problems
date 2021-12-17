function isObejct(obj){ 
    return typeof obj === "object" && obj !== null
}

function isEqual(obj1,obj2){
    if(!isObejct(obj1)&&!isObejct(obj2)){
        return obj1 === obj2
    }
    if(obj1 === obj2){
        console.log("test");
        return true
  }
    const obj1List  = Object.keys(obj1)
    const obj2List  = Object.keys(obj2)
    if(obj1List.length !== obj2List.length){
        return false
    }
    //  遍历
    for(let key in obj1){
        let res = isEqual(obj1[key],obj2[key])
        if(!res ){
            return false
        }
    }
    return true
}

const obj1 = {
    name: "zhangsan",
    age: 18,
    habit: {
        h1: "basketball",
        h2: "baking"
    }

}

const obj2 = {
    name: "zhangsan",
    age: 18,
    habit: {
        h1: "basketball",
        h2: "bakin"
    }
}
console.log(isEqual(obj1,obj1));