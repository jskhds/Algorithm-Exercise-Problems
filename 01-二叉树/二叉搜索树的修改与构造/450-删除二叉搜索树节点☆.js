var deleteNode = function(root, key) {
    if(!root) return null;
    if(root.val > key){
        root.left = deleteNode(root.left, key);
    }
    if(root.val < key){
        root.right = deleteNode(root.right, key);
    }
    if(root.val === key){
        if(!root.left) return root.right;
        if(!root.right) return root.left;
        let cur = root.right;
        while(cur.left){
            cur = cur.left;
        }
        cur.left = root.left;
        return root.right;
    }
    return root;
};


// https://leetcode-cn.com/problems/delete-node-in-a-bst/solution/miao-dong-jiu-wan-shi-liao-by-terry2020-tc0o/