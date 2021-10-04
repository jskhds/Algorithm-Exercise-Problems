// 遍历顺序 中左右
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