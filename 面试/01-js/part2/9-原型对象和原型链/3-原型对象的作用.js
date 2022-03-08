// 作用：给原型添加我们想要的但是需要完善或者增加的一些功能
let date = new Date();
console.log(date);
Date.prototype.format = function(){
    let year = this.getFullYear();
    let month = this.getMonth() + 1;    
    let date = this.getDate();
    return `${year}年${month}月${date}日 `
}
let result = date.format();
console.log(result);

