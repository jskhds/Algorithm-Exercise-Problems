// ES6 的语法 类
// 先声明一个类
class Cat{
    constructor(name,age){
        name = this.name;
        age = this.age;
    }
}
// 定义
let cat = new Cat("喵喵",3);
// 给原型链添加方法
Cat.prototype.eat = function(){
    console.log("喜欢吃鱼");
}
cat.eat()

// 类新添的一个功能 继承
class User{
    constructor(name,password){
        this.name = name;
        this.password = password;
    }
    login(){
        console.log( `${this.name}登录成功` );
    }
}
class Admin extends User{
    delete(){
        console.log('删除了一个用户');
    }
}
let admin = new Admin("管理员",123456)
admin.login();
let user = new User("user",999);
user.login();
