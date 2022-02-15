/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 用哈希表记录
var findMode = function(root) {
    // 使用额外空间 map
    let map = new Map();
    let res = [];
    const inorder = (root) =>{
        if(!root) return;
        inorder(root.left);
        map.set(root.val,map.has(root.val)?map.get(root.val) + 1:1);
        inorder(root.right);
    }
    inorder(root);
    let maxCount = map.get(root.val);
    for(let [key, value] of map){
        if(value === maxCount){
            res.push(key)
        }
        if (value > maxCount){
            res = [];
            res.push(key);
            maxCount = value;
        }
    }
    return res;   
};

// 利用二叉搜索树的特性
var findMode = function(root) {
    // 不使用额外空间，一次中序遍历
    // 注意初始化的值，因为 [0] 的众数是 0，所以出现次数最好都初始化为 0
    let pre = null;
    let maxCount = 0;
    let count = 0;
    let res = [];
    const inorder = (root) =>{
        if(!root) return;
        inorder(root.left);

        if(pre && pre.val === root.val){
            count++;
        }else{
            count = 1;
        }
        pre = root;
        // 判断的前后是有关系的，因为在 count > maxCount 中有赋值操作
        if(count === maxCount){
            res.push(root.val)
        }
        if(count > maxCount){
            res = [];
            maxCount = count;         
            res.push(root.val)
        } 

        

        inorder(root.right);
    }
    inorder(root);
    return res;
};