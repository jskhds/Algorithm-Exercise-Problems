// 示例 1：

// 输入：ransomNote = "a", magazine = "b"
// 输出：false
// 示例 2：

// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false
// 示例 3：

// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true

 
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let map1 = mapRecords(ransomNote);
    console.log(map1);
    let map2 = mapRecords(magazine);
    console.log(map2);
    for(let [key,value] of map1){
        if(map2.has(key)&&map2.get(key)<value || !map2.has(key)) return false;
    }
    return true;
};
// 哈希表记录值
function mapRecords(str){
   let map = new Map();
   for(let i = 0;i<str.length;i++){
       if(map.has(str[i])) map.set(str[i],map.get(str[i])+1);
       else map.set(str[i],1);
   }
   return map;
}

// 用数组
var canConstruct1 = function(ransomNote, magazine) {
    let records = new Array(26).fill(0);
    for(let i = 0;i<magazine.length;i++){
       // 遍历magazine，得到索引i的ascii值 减 97 以后就可以映射到records里面26个字母分别有多少个
        records[magazine.charCodeAt(i) - 97]++;
    }
     for(let j = 0;j<ransomNote.length;j++){
         records[ransomNote.charCodeAt(j)-97]--;
         if(records[ransomNote.charCodeAt(j)-97]<0) return false;
     }
     return true;
}