class Student {
    // constructor
    constructor(name, number){
        // this 当前的类
        this.name = name
        this.number = number
        // 属性也可以自定义，不需要传
        this.school = '阳光小学'
    }

    // 定义方法
    sayHi(){
        console.log(
            `姓名： ${this.name} 学号: ${this.number} 学校: ${this.school} `
        );
    }
    

}

// 通过类 new 对象/实例  也就是说用 new 关键字把这个模板赋给我们需要的变量
let stu1 = new Student('moon','1234')
let stu2 = new Student('sun', '67890')
console.log(stu1);
console.log(stu2);
stu1.sayHi();
