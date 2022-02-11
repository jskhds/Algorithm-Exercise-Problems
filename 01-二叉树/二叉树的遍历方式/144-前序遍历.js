// 递归法 中左右
var preorderTraversal = function(root) {
    let res = [];
   
   var recurise = function(root){
        if(!root) return;
        res.push(root.val);
        recurise(root.left);
        recurise(root.right);
    }
    recurise(root);
    return res;
};


// 迭代法
var preorderTraversal = function(root) {
    let res = []
    if(!root) return res
    const stack = [root] // create stack
    let cur = null

    while(stack.length){
        //因为入栈顺序是右左，出栈顺序自然就是 中左右
        cur = stack.pop()
        res.push(cur.val)
       //  入栈 右左
       cur.right && stack.push(cur.right)
       cur.left && stack.push(cur.left)
    }

    return res

};