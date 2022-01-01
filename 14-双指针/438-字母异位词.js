 /**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 */
var findAnagrams = function(s,p) {
    const sLen = s.length, pLen = p.length;

   if (sLen < pLen) {
       return [];
   }

   const ans = [];
   const sCount = new Array(26).fill(0);
   const pCount = new Array(26).fill(0);
   for (let i = 0; i < pLen; ++i) {
       ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
       ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()];
   }
   // 这部分不能少 因为在滑动窗口主体里面，把 s[0] 的字母数量减 1 了
   if (sCount.toString() === pCount.toString()) {
       ans.push(0);
   }


   // 主要是这个部分
   for (let i = 0; i < sLen - pLen; ++i) {
       // 先处理起点 起点对应的字母数量减 1
       sCount[s[i].charCodeAt() - 'a'.charCodeAt()]--;
       // 再处理重点 重点对应的字母数量加 1
       sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]++;
       // 每一个新窗口都要比较一次
       if (sCount.toString() === pCount.toString()) {
           ans.push(i + 1);
       }
   }

   return ans;


};