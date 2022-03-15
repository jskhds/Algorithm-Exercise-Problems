// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
// 回文串 是正着读和反着读都一样的字符串。
// 示例 1：
// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]


/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function (s) {
    let res = [];
    let path = [];
    function backTracking(s, start) {
      if (start === s.length) {
        res.push(path.slice());
        return;
      }
      for (let i = start; i < s.length; i++) {
        //   如果是回文子串的话，那么就进行回溯，子串的范围为 start 到 i
        if (isPalindrome(s, start, i)) {
          path.push(s.substring(start, i + 1));
        //   下一次分割从  i + 1 开始
          backTracking(s, i + 1);
          path.pop();
      }
    }}
    backTracking(s, 0);
    return res;
  };
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
  