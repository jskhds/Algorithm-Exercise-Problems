// 先学call
// call是一个方法，是函数的方法.可以调用函数，可以改变函数中this的指向

function fn1(){
    console.log("hello");
}
function fn(){
    console.log(this.name);
}
// 1.call可以调用函数
fn1.call()
let cat = {
    name:"miao"
}
let dog = {
    name:"旺财",
    sayName(){
        console.log("my name is " + this.name);
    },
    getFood(food1,food2){
        console.log("my favorite food include " + food1 +  " and "+ food2);
    }

}
// 2.call可以改变函数中this的指向
fn.call(cat)
dog.sayName.call(cat);
dog.getFood.call(cat,"fish","meat")
// apply 传参和call不一样 apply用数组传参 
dog.getFood.apply(cat,["fish","meat"]);
// bind传参和call一样，但是，bind不会调用函数 bind的作用是把函数给返回暴露出来
let fn2 = dog.getFood.bind(cat,"fish","meat")
// 用bind可以比较方便地多次调用函数
fn2();


// 作用  继承
function Animal(){
      this.name = "animal";
      this.eatFood = function(){
          console.log("吃东西");
      }  
      this.sayName = function(){
          console.log(this.name);
      } 
}

function Bird(){
    this.flySky = function(){
        console.log("我会飞");
    }
}
// 需要继承什么函数，就改什么函数的this指向，放在里面
function Lion(){
    
    Animal.call(this);
    Bird.call(this);
}
let lion = new Lion();
lion.name = "狮子";
lion.sayName();
lion.eatFood();
lion.flySky();

