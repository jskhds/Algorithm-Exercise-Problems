/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    const arr = Array.from(s);
    reverse(arr,-1,n);
    reverse(arr,n-1,arr.length);
    reverse(arr,-1,arr.length);
    return arr.join('');

};

function reverse(arr,left,right){
    while(++left<--right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
    }

}