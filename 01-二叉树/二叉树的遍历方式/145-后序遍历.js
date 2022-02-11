var postorderTraversal = function(root) {
    let res = [];
    function recurise(root){
        if(!root) return;
        // 后序 左右中
        recurise(root.left);   
        recurise(root.right);
        res.push(root.val);
    }
    recurise(root);
    return res;
};
// 迭代法
var postorderTraversal = function(root) {
    let res = []
    if(!root) return res 
    let stack = [ root ]
    let cur = null
    while(stack.length){
        cur = stack.pop()
        res.push(cur.val)
        // 入栈顺序： 左右
        cur.left && stack.push(cur.left)
        cur.right && stack.push(cur.right)
    }
    return res.reverse()
};