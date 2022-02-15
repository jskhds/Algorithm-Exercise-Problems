var buildTree = function(preorder, inorder) {
    if (inorder.length == 0) return null;
    const root = new TreeNode(preorder[0]);
    const mid = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
  };


  var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null;
    let cutPoint = preorder.shift();
    const root = new TreeNode(cutPoint);
    let index = inorder.indexOf(root.val);
    /** 左闭右开 注意对于前序数组，第零个在下次递归时不能要（因为我用的是 shift，已经删去原数组的第零个了），对于中序，第 index 不能要
    leftP = preorder.slice(0, index);
    rightP = perorder.slice(index);
    leftI = inorder.slice(0,index);
    rightI = inorder.slice(index +1);
    */
    root.left = buildTree(preorder.slice(0, index),inorder.slice(0,index));
    root.right = buildTree(preorder.slice(index),inorder.slice(index +1));
    return root

};