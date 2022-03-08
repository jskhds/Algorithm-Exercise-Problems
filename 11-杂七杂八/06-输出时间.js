var date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const date1 = date.getDate();
// function numberToChinese() {

// }
const day = date.getDay() == 0 ? "星期日" : "星期" + date.getDay();
console.log(year + '-' + month + '-' + date1 + '-' + day);