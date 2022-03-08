// 每一个对象都有自己的原型对象，它可以使用自己原型对象的属性和方法
// 获取原型的方法：
// 1.通过对象的__proto__获得原型

let cat = {
    name:"喵喵"
}
// 给对象的原型添加属性或者方法
cat.__proto__.eat = function(){
    console.log("喵猫喜欢吃鱼");
}
// cat本身没有eat 但是原型上有eat方法，所以也可以调用
cat.eat();


// 2.通过构造函数的prototype获得原型
 function Dog(name,age){
     this.name = name;
     this.age = age;
 }
 let dog = new Dog("汪汪",3);
 Dog.prototype.eat = function(){
     console.log( `我叫${this.name},今年${this.age}岁了，我喜欢吃骨头`);
 }
 dog.eat();

 

