// 翻转链表
const reverseList = (head) => {
//    用current ！== null来判断什么时候终止翻转 因为在主函数里面 我们已经把end.next断开了
let pre = null, curr = head, next = null;
    while(curr !==null){
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre;
}
// 主函数 四个指针 pre start end next
var reverseKGroup = function(head, k) {
//   1.定义指针
const dummy = new ListNode(0);
dummy.next = head;
let pre = dummy, start = head, end = head, next = head;
while(next !== null){
    // 根据k来找到end
    for(let i = 0; i<k && end!== null;i++){
        end = end.next;
    }
    // 链表尾部没有被整除 跳出循环
    if(end === null) break;
    // 进入翻转区进行翻转
    // 1）next指向end.next(end已经在前面找到了)
    next = end.next;
    // 2)断开end与后一个元素（以便翻转独立出来的链表节段）
    end.next = null;
    // 3)把end指向start之后 开始翻转
    end = start;
    start = reverseList(start);
    end.next = next;
    pre.next = start;
    // 重新定义指针
    pre = end;
    start = next;
    end = start;

}
return dummy.next;
};
