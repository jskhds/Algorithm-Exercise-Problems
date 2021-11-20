// 其实说难也不难，就是懒得写
var MyStack = function() {
    this.que1 = [];
    this.que2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.que1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let len = this.que1.length;
    while(len>1){
        this.que2.push(this.que1.shift());
        len--;
    }
    let x = this.que1.shift();
    [this.que2,this.que1] = [this.que1,this.que2];
    return x;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const x = this.pop();
    this.que1.push(x);
    return x;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.que1.length&&!this.que2.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */