// 输入："abbaca"
// 输出："ca"
// 解释：
// 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。
// 之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 /**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
     
    for( const x of s){
        // 1.把元素push进去 要么栈是空的，要么当前元素和栈顶元素不相同
        // 注意要把pop出的值保存起来再加回去
        let c = null;
        if(stack.length&&x===(c=stack.pop())) continue; 
            c&&stack.push(c);
            stack.push(x);
    }
    return stack.join("");
};