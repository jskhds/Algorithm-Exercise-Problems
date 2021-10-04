function foo() {
    console.log("hello");
}
function bar() {
    console.log("world");
}
var obj = {}; // 这里就直接创建了一个对象
// 对象的各项属性可以根据需要进行挂载，直接赋值就行
obj.foo = foo;// 把函数赋值给一个变量可能不好理解，实际上函数也是对象，也只是一个很普通的值而已
obj.bar = bar;

return obj;

// 其实可以写短一点，二者是完全等价的：
var obj = { // 这里在对象创建的时候直接指明几个属性的值
    foo: function () { console.log("hello"); },// 这里定义了一个匿名函数，既然函数是一个普通的值，那创建的方式也应该很普通
    bar: function () { console.log("world"); }
};


