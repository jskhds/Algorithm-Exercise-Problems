console.log(foo);     // undefined
console.log(bar);     // [function:bar]
var foo = function () { };
function bar() { }
console.log(foo); //[Function: foo]
/*
var foo;
function bar(){};
console.log(foo);
console.log(bar);
foo = function(){};
console.log(foo);
*/

function foo() {
    a = 5;
    console.log(window.a);  //  ?
    console.log(a);         //  ?
    var a = 10;
    console.log(a);         //  ?
}
foo();

/*
var function foo(){};

function foo(){
    var a; //提升到作用域的顶部
    a = 5;
    console.log(window.a);  //  undefined 因为没有提升到window的高度
    console.log(a);         // 5
    a = 10;
    console.log(a);//10
}
*/