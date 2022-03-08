// 另写一个函数 判断是否为 不为空的对象或数组
function isObject(obj){
    return typeof obj === 'object' && obj !== null
}
// 递归比较
function isEqual(obj1,obj2){
    if(!isObject(obj1)||!isObject(obj2)){
        return obj1 === obj2
    }
    if(obj1 === obj2){
        return true
    }
    // 确保两个都是对象或数组 且不想等
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if(obj1Keys.length !== obj2Keys.length){
        return false
    }
    // 递归比较
    for(let key in obj1){
        const res = isEqual(obj1[key],obj2[key])
        if(!res){
            return false
        }
    }
    return true

}
const obj1 = {
    a:100,
    b: {
        x: 100,
        y: 200
    }

}
const obj2 = {
    a:100,
    b: {
        x: 100,
        y: 200
    }

}
console.log(isEqual(obj1,obj2));