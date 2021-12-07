
// 用层序遍历 记录最后一层的第一个值就可以了
var findBottomLeftValue = function(root) {
    let res = null;
    if(!root) return res; 
    let queue = [root];
    while(queue.length>0){
        let len = queue.length;  
       for(let i = 0;i<len;i++){
           let curr = queue.shift();
            if(i===0){
                res = curr.val
            }
           curr.left&&queue.push(curr.left);
           curr.right&&queue.push(curr.right); 
       }
        
    }
     
     
    return res 
};