/**
 * @param {string[]} tokens
 * @return {number}
 */
// 解题关键在于 知道逆波兰表达式的运算规则
 var evalRPN = function(tokens) {
    const stack = [];
    for(const i of tokens){
       //  如果不加parseInt的话 会把i识别成字符串
         if (!isNaN(-i)) stack.push(parseInt(i))
        else {
            let a = stack.pop();
            let b = stack.pop();
            
           if(i === '+'){
              stack.push(b+a);
            }
            if(i === '-'){
                stack.push(b-a);
            }
            if(i === '*'){
                stack.push(b*a);

            }
            if(i === '/'){
                stack.push(b/a>0?Math.floor(b / a) : Math.ceil(b / a));

            }
            }
       
    }
    return stack.pop();
};