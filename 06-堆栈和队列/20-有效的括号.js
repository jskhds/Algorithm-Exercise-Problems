// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false
 
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    let temp ='';
    if(s.length==0) return true;
   
    for(let char of s){
        if(char == '(' ||char=='{' || char == '['){
            stack.push(char);    
                     
        }
        else  {            
       
        temp = stack.pop();
      
        if(char==')' && temp !=='(')     return false;
        else if(char=='}' && temp !=='{') return false;
        else if(char==']' && temp !=='[') return false; 
        }
        
    }  
   
    return stack.length==0?true:false;
    
    
};