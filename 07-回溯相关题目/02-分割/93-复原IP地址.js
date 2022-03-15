// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，
// 但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，
// 这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]
/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    const res = [];
    const path = [];
    function backTracking(s,start){
        // 1. 切割点到了最后，说明整个字符串都分好了，并且 path 的长度为题目要求的 4
        if(start === s.length && path.length === 4){
            res.push(path.slice().join('.'));
            return;
        }
        for(let i = start;i<s.length;i++){
            if( i - start <=  4  && isValid(s,start,i)){
                path.push(s.slice(start,i+1));
                backTracking(s,i+1);
                path.pop();
            }
        }
    }
    backTracking(s,0);
    return res;
};
function isValid(s,l,r){
    s = s.slice(l,r + 1);
    if(s.length > 1 && s[0] === '0') return false;
    if(parseInt(s) > 255) return false;
    return true;   
}