function solve( s ) {
    // write code here
    // 先找到 LR 的位置
    s = s.split('');
    console.log(s);
    let left;
    let right;
    for(let i = 0;i<s.length;i++){
        if(s[i] === 'L')
        {
            left = i;
        }
        if(s[i] === 'R'){
             right = i;
        }
        
    }
    // 分两种情况 R 在 L 右边，此时不会有受力平衡
    if(right > left){
        for(let i = 0;i<left;i++){
            s[i] = 'L';
        }
        for(let i = right;i<s.length;i++){
            s[i] = 'R';
        }
    }
    // R 在 L 左边 中间还有奇数个点，最中间一个平衡
    if(right < left){
        let distance = left - right - 1;
        let standPoint;
        let middle;
        if(distance%2 !== 0){
             standPoint = right + Math.ceil(distance/2);
        }
        if(distance%2 === 0){
             middle = distance/2;
        }
        let gap = standPoint !== 0?standPoint:middle;
        for(let i = right;i< gap + right;i++){
            s[i] = 'R';
        }
        for(let i = right + gap + 1; i<left;i++){
            s[i] = 'L';
        }
        
        
    }
    return s.join('');
}
solve('...LR...')
console.log(solve("R...L"))