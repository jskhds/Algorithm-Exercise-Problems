/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let flag = true,arr;
    let curr = head;
    while(curr!== null){
        arr.push(curr.val);
    }
    if(arr.length%2 === 0){
        let len = arr.length/2;
    
        for(let i = 0; i<len;i++){
            if(arr[i] !== arr[len-i])
            flag = false;
        }
    
    }
    else flag = false;
   
    
    return flag;
};