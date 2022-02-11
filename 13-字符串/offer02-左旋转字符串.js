// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
// 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

 /*
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 先翻转前n个 再翻转剩下的 最后翻转全部
 var reverseLeftWords = function(s, n) {
    const arr = Array.from(s);
    reverse(arr,-1,n);
    reverse(arr,n-1,arr.length);
    reverse(arr,-1,arr.length);
    return arr.join('');

};

function reverse(arr,left,right){
    while(++left<--right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
    }

}