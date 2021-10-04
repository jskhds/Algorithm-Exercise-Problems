var deleteDuplicates = function(head) {
    // 由于链表的头节点可能会被删除，因此我们需要额外使用一个哑节点（dummy node）指向链表的头节点。
    const dummy = new ListNode(0,head);
    dummy.next = head;
    pre = dummy;
    cur = head;
    if(!head) return head;
    while( cur!==null){
    //    1 移动cur指针
    while(cur.next && cur.val === cur.next.val){
        // 1）cur.val == cur.next.val  那么cur指向当前cur的下一个 直到cur不和cur.next 重复为止
        
            cur = cur.next;
        }
        // 2）不管cur.val是否和 cur.next.val 相同 cur都要往下移动 只是不同时少移动重复元素的次数
        cur = cur.next;

        // 2 移动pre指针 判断条件看 pre.next 和cur的距离
        // 1) pre.next.next = cur 说明中间只隔了一个没有重复的元素
        if(pre.next.next == cur)  pre= pre.next;
        // 2)如果不是 说明中间有重复的元素 直接删去 
        else pre.next = cur;


    }

            
        // dummy是没有被删除的哑结点 此时dummy.next 和cur.next 是不一样的
       return  dummy.next;

    }

    var deleteDuplicates1 = function(head) {
        if(!head) return head;
        const dummy = new ListNode(0,head);
        let cur = dummy;
        while(cur.next && cur.next.next){
            if(cur.next.val === cur.next.next.val){
                const x = cur.next.val;
                while(cur.next && cur.next.next.val == x){
                    cur.next = cur.next.next;
                }
            }

           else cur = cur.next;
        }
        return dummy.next;
    }









