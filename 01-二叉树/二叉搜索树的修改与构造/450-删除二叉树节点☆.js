var deleteNode = function(root, key) {
    if(root == null) return null
    if(root.val === key){
        if(!root.left) return root.right
        else if(!root.right) return root.left
        else{
            let cur = root.right
            while(cur.left){
                cur = cur.left
            }
            cur.left = root.left
            root = root.right
            delete root
            return root
        }
    }
    if(root.val>key) root.left = deleteNode(root.left,key)
    if(root.val < key) root.right = deleteNode(root.right,key)
    return root
};