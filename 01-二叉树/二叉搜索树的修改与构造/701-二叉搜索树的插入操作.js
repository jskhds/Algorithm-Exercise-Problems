/**
 * 
 * @param {*} root 
 * @param {*} val 
 * @returns 
 * 如果画图看的话，其实这个递归函数只是记录了要把值插入到什么地方，结束的时候是没有返回值的，直接结束递归
 */
var insertIntoBST = function(root, val) {
    const helper = (root,val)=>{
         if(root == null){ // 1
             let node = new TreeNode(val)  
             if(val>parent.val) parent.right = node
             else parent.left = node
             return  
         }
         parent = root//2
         if(root.val > val) helper(root.left,val)//3
         if(root.val<val) helper(root.right,val)//4
         return//5
     }
    let parent = new TreeNode(0)
    if(root == null){
        root = new TreeNode(val)
    }
    helper(root,val)
    return root
};
// 简洁版
var insertIntoBST = function(root, val) {
    //  找到空节点就可以插入了
    if(root == null){
        let node = new TreeNode(val)
        return node
    }
    // 像这两句 其实只起到记录节点的功能 是没有返回值的
    if(root.val>val) root.left = insertIntoBST(root.left,val)
    if(root.val<val) root.right = insertIntoBST(root.right,val)
    return root
};

// 迭代 不是很明白
var insertIntoBST = function(root, val) {
    if(root == null){
        root = new TreeNode(val)
    }else{
        let p = new TreeNode(0)
        let cur = root
        while(cur){
            p = cur
            if(cur.val > val){
                cur = cur.left
            }else{
                cur = cur.right
            }
        }
        let node = new TreeNode(val)
       if(p.val>val){
        p.left = node
    }else{
        p.right = node
    }
    }
    
    return root

};
