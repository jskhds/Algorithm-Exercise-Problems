
// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
// 只使用数字1到9
// 每个数字 最多使用一次 
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    let res = [];
    let path = [];
    function backTracking(startIndex,k,n){
        if(path.length === k ){
            let sum = 0;
            for(let i = 0;i<k;i++){
                sum += path[i];
            }
            if(sum === n) res.push(path.slice());
            return;
        }
        for(let i = startIndex;i<=(10 + path.length - k);i++){
            path.push(i);
            backTracking(i+1,k,n);
            path.pop();
        }
    }
    backTracking(1,k,n);
    return res;
};


// 对 sum 也做回溯
 var combinationSum3 = function(k, n) {
    let res = [];
    let path = [];
    let sum = 0;
    function backTracking(startIndex,k,n){
        if(sum > n) return;
        if(path.length === k ){
            if(sum === n) res.push(path.slice());
            return;
        }
        for(let i = startIndex;i<=(10 + path.length - k);i++){
            sum += i;
            path.push(i);
            backTracking(i+1,k,n);
            sum -= i;
            path.pop();
        }
    }
    backTracking(1,k,n);
    return res;
};