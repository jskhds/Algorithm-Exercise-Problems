// 函数作为返回值
function create(){
    const a = 100
    return function (){
        console.log(a)
    }
}
//  因为返回的是一个函数 如果要执行这个返回的函数 需要拿一个函数接着

// const createExecu = create()
// createExecu()
// const a = 200
// createExecu()
// let b = 200
// createExecu(b)

// 函数作为参数

function print(fn){
    const a = 200
    fn()
}
const a = 100
function fn(){
    console.log(a);
}
print(fn) // 100