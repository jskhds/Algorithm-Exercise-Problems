// 父类
class People{
    constructor(name,favorite){
        this.name = name
        this.favorite = favorite
    }
    eat(){
        console.log(`${this.name} likes to eat ${this.favorite}`);
    }
}

// 子类1
// extends 关键字 表示继承于
class Student extends People{
    constructor(name,favorite,number){
        super(name, favorite)
        this.number = number
    }
    sayHi(){
        `姓名 ${this.name} 学号 ${this.number}`
    }
}
// 子类2
class Teacher extends People{
    constructor(name,favorite,major){
        super(name,favorite)
        this.major = major
    }
    teach(){
       console.log( ` ${this.name} 教授 ${this.major}`)
    }
}

let stu = new Student('sam','banana','123456')
let teacher = new Teacher('Miss Wang','grape','JavaScript')
function log(x){
    console.log(x)
}
 
 

 log(Student.prototype.__proto__) //{}

 log(People.prototype) //{}

 log(Student.prototype.__proto__ === People.prototype) //true
 
 log (stu.__proto__.sayHi()) // undefined
 log (stu.__proto__.name) //undefined 因为相当于 stu.__proto__ 作为this了，这个this上没有name没有number
 