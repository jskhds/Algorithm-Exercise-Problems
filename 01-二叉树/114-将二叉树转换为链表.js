var flatten = function(root) {
    // 非递归 原地修改
    while(root != null){
        if(root.left == null){
            root = root.right
        }else{
            let pre = root.left
            while(pre.right !== null){
                pre = pre.right
            }
            // 把 root 的右节点接过来
            pre.right = root.right
            // 再把 root.left 整个移到右边
            root.right = root.left
            root.left = null
        }
    }
};

// 暴力法
var flatten = function(root) {
    const list = [];
    preorderTraversal(root, list);
    const size = list.length;
    for (let i = 1; i < size; i++) {
        const prev = list[i - 1], curr = list[i];
        prev.left = null;
        prev.right = curr;
    }
};

const preorderTraversal = (root, list) => {
    if (root != null) {
        list.push(root);
        preorderTraversal(root.left, list);
        preorderTraversal(root.right, list);
    }
}

 
