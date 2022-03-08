const User = {
    count: 1,
    getCount: function(){
        return this.count
    }

}
const a = {
    count: 2
}
console.log(User.getCount()); // 1 this 就是 User this.count 就是 User.count
const func = User.getCount
// 因为函数里面 this 的值在执行的时候才知道，如果把 User的getCount 作为单独的函数执行，那么this 就相当于 window了
console.log(func()); // undefined  
console.log(func.call(a)); // 执行的时候 this 指向 a 就有 count 了

