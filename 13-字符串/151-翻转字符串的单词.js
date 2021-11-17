/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    // 字符串转数组
    const arr = Array.from(s);
    // 移除多余空格
    removeExtraSpaces(arr);
    // 翻转
    reverse(arr, -1, arr.length);
 
    let start = -1;
 
    for(let i = 0; i <= arr.length; i++) {
      if (arr[i] === ' ' || i === arr.length) {
        // 翻转单词
        reverse(arr, start, i);
        start = i;
      }
    }
 
    return arr.join('');
 };
 
 // 删除多余空格
 function removeExtraSpaces(arr) {
   let slow = 0;
   let fast = 0;
   while(fast < arr.length) {
     // 移除开始位置和重复的空格
     if (arr[fast] === ' ' && (fast === 0 || arr[fast - 1] === ' ')) {
       fast++;
     } else {
       arr[slow++] = arr[fast++];
     }
   }
 
   // 移除末尾空格
   arr.length = arr[slow - 1] === ' ' ? slow - 1 : slow;
 }
 
 // 翻转从 start 到 end 的字符
 function reverse(arr, start, end) {
   let left = start;
   let right = end;
 
   while(++left<--right){
    [arr[left],arr[right]] = [arr[right],arr[left]];
}
 }
  
 const res = reverseWords(" the sky is  blue ");
 console.log(res);