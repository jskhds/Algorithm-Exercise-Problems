// 两个字符串每个字母出现的次数是否相同
//  这个会超时
var isAnagram1 = function(s, t) {
    let lens = s.length;
    let lent = t.length;
    if(lens!==lent) return false;
    let arr1 = rank(s);
    let arr2 = rank(t);
    for(let i = 0;i<lens;i++){
        if(arr1[i]!==arr2[i])
        return false;
    }
    return true;
     
};
// 排序
function rank(s){
    let arr = s.split('');
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
}
    return arr;
}

var isAnagram2 = function(s, t) {
    // 转成数组然后排序然后连接成字符串
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};
// 哈希表 注意js charAt
var isAnagram3 = function(s, t) {
    // 哈希表
    // 定义一个长26的数组存字母
    if(s.length!==t.length) return false;
    let alphabet = new Array(26).fill(0);
    // 先用s加 再用t减 如果最后数值不全为零 说明有不同
    for(let i = 0;i<s.length;i++){
        alphabet[s.charCodeAt(i)-97]++;
    }
    for(let i = 0;i<t.length;i++){
        alphabet[t.charCodeAt(i)-97]--;
    }
    for(let i = 0;i<26;i++){
        if(alphabet[i]!==0) return false;   
    }
    console.log(alphabet);
    return true;
};
