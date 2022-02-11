/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let res = [];
    const recursion = ( root )=>{
        if(!root) return root;
        res.push(root.val);
        for(let node of root.children){
            recursion(node);
        }

    }
    recursion(root);
    return res
};