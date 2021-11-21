/**
 * @param {number[]} arr
 */
 var RangeFreqQuery = function(arr) {
    let map = new Map();
//     如果定义在原型链上，不需要let 直接this就定义在原型链上了
    this.arr = arr;
    this.ans = [];
    for(let i = 0; i < this.arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i])+1);
        }
        this.ans.push({
            key: arr[i],
            value: map.get(arr[i])
        });
    }   
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
    let flag = 0;
//     ans数组记录了每个索引i对应的数当前出现过几次
//     所以，先把left以前出现过几次找出来 再把从left到right出现过几次找出来（记得是倒序遍历），相减就是这个区间出现过几次 
    for(let i = left-1; i >= 0; i--) {
        if (this.ans[i].key === value) {
            flag = this.ans[i].value;
            break;
        }
    }
    for(let i = right; i >= left; i--){
        if (this.ans[i].key === value) {
            return this.ans[i].value - flag;
        }
    }
    return 0;
    
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */