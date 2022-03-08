function hello(content){
    console.log(content);
}
function say(func, content){
    func(content);
}
say(hello, "hello");