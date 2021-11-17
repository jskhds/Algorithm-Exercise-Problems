/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    let count = 0;
    let arr = Array.from(s);
    let len = s.length
    for(let i = 0;i<len;i++){
        if(s[i]==' '){
            count++;
        }
    }
    let reLen = len+count*2;
    let left =len-1 ;
    let right = reLen-1;
    while(left>=0){
        if(arr[left]==' '){
           arr[right--] = '0';
           arr[right--] = '2';
           arr[right--] = '%';
            left--;
        }
        else{
            arr[right--] = arr[left--];
        }       
    }
    return arr.join('');
};