
// 1. 1 是最小的丑数。
// 2.对于任意一个丑数 xx，其与任意的质因数（22、33、55）相乘，结果（2x2x、3x3x、5x5x）仍为丑数。
// 3.3指针法
    var nthUglyNumber = function(n) {
          // 新建一个丑数数组 arr[0]不要 从1开始
    var arr = new Array(n+1);
    arr[1] = 1;
    // 每一个丑数数组 arr 通过 arr*2 arr*3 arr*5 形成三个数组（更新）
    // 定义三个指针 一开始都指向三个序列的第一个数
    let i2 = 1, i3 = 1, i5 = 1;
    for(let idx = 2;idx<=n;idx++){
        // a 是 arr*2 里的数  依此类推
        let a = arr[i2] * 2, b = arr[i3]*3,c = arr[i5]*5;
        // 找出三个序列中最小的那个数
        let min = Math.min(a,b,c)
        // 找出以后 min对应数所在的数组 指针加1 也就是下标加1 更新一个数 
        // (如果自己画一遍会发现) 本来每个队列都可以下标加1再乘以自己的质因数 但是会有重复
        if(min === a) i2++;
        if(min === b) i3++;
        if(min === c) i5++;
        arr[idx] = min;

    }
    return arr[n];
    };
const res = nthUglyNumber(8);
console.log(res);
