/**
 * 中序和后序构造二叉树：后序的最后一个节点是节点元素，这个节点元素在中序数组的位置可以作为切割点，
 * 切割点左边是中序的左子树，切割点右边数中序的右子树，
 * 一层一层往下切割即可。
 * 需要注意，切割点已经用过了，在下一次递归中这个切割点作为 root，不需要传入递归中
 */
 var buildTree = function(inorder, postorder) {
    const recursion = (inorder, postorder)=>{
        //1. 如果不能构成树了，返回空
        if(!inorder.length) return null;
        //2. 找到分割点，也就是后序的最后一个节点，用这个来切割中序
        const cutPoint = postorder.pop();
        const root = new TreeNode(cutPoint);
        //3. 找到分割点在中序的位置
        // 1).用 indexof const index =  inorder.indexof(root.val);      
       // 2).循环找
        let index;
        for(let i = 0;i<inorder.length;i++){
            if(root.val === inorder[i]){
                index = i;
                break;
            }
        }
        // 切割采用左闭右开
        // slice 包含 begin 不包含 end
        // 4.切割中序 对于中序来讲， index 对应的值已经是 root 了，所以切割的时候不要
        let leftInorder = inorder.slice(0, index);
        let rightInorder = inorder.slice(index + 1);  
        // 5.切割后序 用中序的大小来切割, 因为后序的最后一个值已经是 root了，所以最后一个不要
        let leftPostorder = postorder.slice(0, index);
        let rightPostorder = postorder.slice( index) ;
        // 6.递归调用
        root.left = recursion(leftInorder, leftPostorder);
        root.right = recursion(rightInorder, rightPostorder);
        return root;
    }
    return recursion(inorder, postorder)
};