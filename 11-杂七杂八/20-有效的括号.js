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

const res = isValid("")
console.log(res);