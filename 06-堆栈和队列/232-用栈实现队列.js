var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let len = this.stack2.length;
    // 如果stack2有值，那么最上方的就是队列的头，直接弹出即可
    if(len){
        return this.stack2.pop();
    }
    // stack2为空，先把s1的值都pop到s2，push进来
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // 执行原型链上的pop函数：返回队列开头的元素
    const x = this.pop();
    // 记得再加回去
    this.stack2.push(x);
    return x;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // 队列为空返回true
    return !this.stack1.length&& !this.stack2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */