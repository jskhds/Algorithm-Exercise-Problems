function Node(element){
    this.element =  element;
    this.next = null;
    // 双向链表 多一个前节点
    this.prev = null;

}

// 构造函数 创建头结点 以及链表的一些方法
function List(){
    this.head = new Node( 'head' );     //头节点
    this.find = find;                   //查找节点
    this.insert = insert;               //插入节点
    this.remove = remove;               //删除节点
    this.findPrev = findPrev;           //查找前一个节点
    this.display = display;             //显示链表
    this.removeDoub = removeDoub;       //双向链表删除节点
    this.dispReverse = dispReverse;     //反向显示链表
    this.findLast = findLast;           //找到最后一个元素
     
}

// 查找给定的节点

function find(ele){
    let currNode = this.head;
    while(currNode.element != ele){
        currNode = currNode.next;
    }
    return currNode;
}

// 插入节点 参数 ele给定的节点 newEle要插在后面的节点
function insert(newEle,ele){
    let currNode = this.find(ele);
    let newNode = new Node(newEle);
    // 注意这两者的顺序不要写反了，新节点是插在当前节点和当前节点下一个节点之间的
    newNode.next = currNode.next;
    // 双向链表新增的prev属性
    newNode.prev = currNode;
    currNode.next = newNode;
}

function display(){
    let currNode = this.head;
    while(!(currNode.next  == null)){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
 


// 单向链表删除节点 和添加节点的思路差不多 先找到删除节点的前一个节点 让这个节点的next属性指向curNode.next就行
function findPrev(ele){
    let currNode = this.head;
    while(!( currNode.next == null) && ( currNode.next.element != ele )){
        currNode = currNode.next;
    }
    return currNode;
}
// 单向链表删除
function remove(ele){
     let prevNode =  this.findPrev(ele);
     if(prevNode.next !== null)
     prevNode.next = prevNode.next.next;
}
// 双向链表删除
function removeDoub(ele){
    let currNode = this.find(ele);
    if( !( currNode.next == null ) ){
        currNode.prev.next = currNode.next;
        currNode.next.previous = currNode.prev;
        currNode.next = null;
        currNode.previous = null;
    }

 

}
function findLast(){
    let currNode = this.head;
    while(currNode.next !== null){
        currNode = currNode.next;
    }
    return currNode;
}

function dispReverse(){
    let currNode = this.findLast();
    while(currNode.prev !== null){
        console.log(currNode.element);
        currNode = currNode.prev;
    }
}
let fruits = new List();

fruits.insert('Apple' , 'head');
fruits.insert('Banana' , 'Apple');
fruits.insert('Pear' , 'Banana');

console.log(fruits.display());    
console.log(fruits.dispReverse());

