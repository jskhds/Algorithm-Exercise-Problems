// 直接输出this 指向全局对象
// console.log(this);

let cat = {
    name:"miaomaio",
    sayName(){
        console.log(this.name);
    }
}
cat.sayName();

// 箭头函数的this
// 1.普通函数，谁调用就指向谁，箭头函数，在哪里定义就指向谁
// 2.箭头函数外面的指哪它的this就指哪
// 3.也可以理解为箭头函数没有this