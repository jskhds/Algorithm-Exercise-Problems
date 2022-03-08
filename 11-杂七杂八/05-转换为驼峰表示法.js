const foo = "get-element-by-id";
var firstLetter = [];
var firstWord = [];
let changeName = function (msg) {
    // split("")删除
    const array = msg.split("-");
    for (i = 0; i < array.length; i++) {
        firstLetter[i] = array[i].charAt(0).toUpperCase();
        firstWord[i] = firstLetter[i] + array[i].substring(1, array[i].length);
    }
    console.log(firstWord.join(''));
}
changeName(foo);