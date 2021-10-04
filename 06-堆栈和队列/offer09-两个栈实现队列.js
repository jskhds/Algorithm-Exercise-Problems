
var CQueue = function() {
// 先初始化两个栈 stack1 倒序 tail在上， stack2 正序 head在上
// 注意要加this
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
        // stack1 直接加tail就行
        this.stack1.push(value);

};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // step1 如果stack2 的长度不为零 说明里面有数 直接删就行
    if(this.stack2.length !== 0){
        return this.stack2.pop();
    }
    // step2 此时stack2为空 那么就把stack1的值(如果有的话)一个个加到stack2里 用while最适合，终止条件时stack1 为空
    else{
        if(this.stack1.length){
            while(this.stack1.length !== 0){
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        }
       else{
           return -1;
       }

    }
    
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */