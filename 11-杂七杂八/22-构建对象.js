// 1.简单对象创建
var Cat = {};
Cat.name = "mimi";
Cat.age = 3;
console.log(Cat);//{ name: 'mimi', age: 3 }
// 2.先定义一个function 然后new
function newPerson() { };
var person = new newPerson();
person.name = "joey";
person.age = 18;
// 注意 不能写成 person.sayHello () {
//     console.log("sayHello");
// }   一定要谨记键值对的赋值方法 给一个属性=属性值（可以是值也可以是函数）
person.sayHello = function () {
    console.log("sayHello");
}
console.log(person);//newPerson { name: 'joey', age: 18, sayHello: [Function (anonymous)] }
person.sayHello();//调用 对象的属性名即可
// 3.Object关键字
var obj = new Object();
//4.有参函数建造
function Pet(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.sayHello = function () {
        console.log('我叫' + name + '，今年' + age + '岁了，我喜欢' + hobby + '，很高兴认识你');
    }
}
var obj_1 = new Pet("麦兜", 3, "睡觉");
obj_1.sayHello();//我叫麦兜，今年3岁了，我喜欢睡觉，很高兴认识你