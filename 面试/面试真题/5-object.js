const obj1 = {
    a: 10,
    b: 20,
    sum(){
        return this.a + this.b
    }
}

const obj2 = new Object(obj1) // obj1 === obj2
const obj3 = Object.create(null) // 没有属性 没有原型
const obj4 = new Object(null)  // 没有属性 但是有原型
const obj5 = Object.create(obj1) // 此时 obj5 的隐式原型是 obj1 也就是 Object，所以 obj5 的属性是空的，但是可以读取原型上的属性和方法
const flag = (obj1 === obj5) // false
const flag1 = (obj5.__proto__ === obj1)  // true