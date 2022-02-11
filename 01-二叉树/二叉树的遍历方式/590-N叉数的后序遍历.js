var postorder = function(root) {
    let res = [];
    const recursion = (root)=>{
        if(!root) return;
        for(let node of root.children){
            recursion(node);           
        }
        res.push(root.val);   
    }
    recursion(root);
    return res;
};

// 迭代法，入栈出栈，前序的翻版

var postorder = function(root) {
    if(!root) return []
    let res = [];
    const stack = [root];
    while(stack.length){
        let cur = stack.pop();
        res.push(cur.val);
        cur.children&&stack.push(...cur.children)
    }
    return res.reverse()
};