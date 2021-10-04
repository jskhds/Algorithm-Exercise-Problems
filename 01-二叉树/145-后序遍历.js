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