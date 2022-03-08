// ES5继承 用prototype
function User(name,password) {
    this.name = name;
    this.password = password;
    this.login = function(){
        console.log( `用户${this.name}登录成功`);
    }
}

function Admin(){
    this.delete = function(){
        console.log("删除了一个用户");
    }
}
let user = new User("user",0000);
user.login()
// 拿不到name很奇怪 不是继承了吗？
Admin.prototype = new User();
let admin = new Admin("管理员",123456);
admin.login();