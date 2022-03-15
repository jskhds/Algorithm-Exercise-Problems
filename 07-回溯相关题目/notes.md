回溯模板

function backtracking(){
    if(终止条件){
        存放结果
        return
    }
    for(选择本层集合中元素，树中节点孩子的数量就是集合大小){ // 这句话是关键，可以结合 17 和 77 体会一下
        处理节点
        backtracking(路径，递归列表);
        回溯，撤销处理结果
    }
}


40 注意不重复
90 注意不能重复
不重复的办法：首先把给的 nums 排序,在 for 遍历的时候，如果 (i>start && nums[i] === nums[i-1] ) continue;其它的花办法就不要想了，把这个记住
131 重点在终止条件和切割子串判断是否为回文
`````
//   判断回文串的方法要记一下
  function isPalindrome(s, l, r) {
    while (l < r) {
      if (s[l] != s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }
  `````
