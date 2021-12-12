/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 用哈希表记录
 var findMode = function(root) {
    let map = new Map()
    const inOrder = root=>{
        if(root == null) return 
        inOrder(root.left)
        map.set(root.val,map.has(root.val)?map.get(root.val)+1:1)
        inOrder(root.right)
    }
    inOrder(root)
    let max = 0
    let res = []
    for(let value of map.values()){    
        max = max>value?max:value
    }
    
    for(let [key,value] of map){
        if(value === max){
            res.push(key)
        }
    }
    return res
    

};

// 利用二叉搜索树的特性
var findMode = function(root) {
    let pre = null
    let res = []
    let count = 0
    let maxCount = 0
    const inOrder = root=>{
        if(root == null) return 
        inOrder(root.left)
        // 处理逻辑
        if(!pre){
            count = 1
        }else if(pre.val === root.val){
            count++
        }else{
            count = 1
        }
        pre = root
        if(count === maxCount) res.push(root.val)
        if(count > maxCount){
            res = []
            maxCount = count
            res.push(root.val)
        }
        inOrder(root.right)
    }
    inOrder(root)
    return res
};