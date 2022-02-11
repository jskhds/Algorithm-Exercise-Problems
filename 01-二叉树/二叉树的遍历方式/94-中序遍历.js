// 遍历顺序 左中右
function inorderTraversal(root) {
    const res = [];
    const inorder = (root) =>{
        if(!root){
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
}

// 迭代法
// 先入栈的是根节点，然后往左走，
var inorderTraversal = function(root, res = []) {
    const stack = []
    let cur = root
    while(stack.length || cur){
        if(cur){
            stack.push(cur)
            // 往左走
            cur = cur.left
        }else{
            cur = stack.pop()
            res.push(cur.val)
            // 往右走
            cur = cur.right
        }
    }
    return res
};


