/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    for (let val of s) {       
        if (val === '(') stack.push(')');
        else if (val === '[') stack.push(']');
        else if (val === '{') stack.push('}');
        else if (stack.length === 0 || val !== stack.pop()) return false;
    }
    return stack.length === 0;
};


/**
 * 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

1.只要有任何一个奇数项 等于 ）} 】 flag=false
2.判断奇数项 为( 且下一项不是 ） flag=false
3.奇数项 为{ 或者 [ 只有 后面的偶数项 有匹配的 flag 为 true 并且删掉这两项 再进行匹配


 */

console.log(isValid("([)]"));