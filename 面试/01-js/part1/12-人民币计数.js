var str = '12345678';
function reverse(str) {
    // 这里声明变量绝对不能用var 否则调用一次函数以后 newStr 就不再是空字符串了
    let newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        // 和数组的push是一个意思 newStr = newStr + str[i]  a += b equals a = a + b
        newStr += str[i];
    }
    return newStr;
}
function replaceStr(str) {
    return str.replace(/(.{3})/g, '$1,');
}
const strFinal = reverse(replaceStr(reverse(str)));
console.log(strFinal);
