
var rightSideView = function(root) {
   if(!root) return [];
   let res = [];
  res =  dfs(root,0,res);
    return res;
};
// 查找函数
    function dfs(currnode,level,res){     
    if(currnode){        
         if(res.length === level){
         res.push(currnode.val)
     }
     if(currnode.right !==null){
         dfs(currnode.right,level+1,res)
     }
    //  因为前面如果有右的话 res.length 就已经加过1 了 那么左边level+1 以后就不能匹配上if的条件
     if(currnode.left !==null){
         dfs(currnode.left,level+1,res)
     }
       
     }
     return res;
}
 
