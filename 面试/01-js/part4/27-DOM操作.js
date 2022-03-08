// // 1.通过id来获取
// const div1 = document.getElementById('div1')
// console.log('div1',div1);

// // 通过 tagName 获取
// const divList = document.getElementsByTagName('div')
// console.log('divList length',divList.length);
// console.log('divList[0]',divList[0]);

// // 3. 通过class获取
// const containerList = document.getElementsByClassName('container')
// console.log('containerList length',containerList.length);
// console.log('containerList[0]',containerList[0]);

// // 4. querySelector
// const pList = document.querySelectorAll('p')
// console.log('pList',pList);

// // property 形式 改变页面样式或者渲染结构
// p1.style.width = '100px'
// console.log(p1.style.width);
// p1.className = 'red'
// console.log(p1.className);
// // 获得nodeName（标签节点的名称）
// console.log(p1.nodeName);
// // 获得nodeType 一般是 1 不常用
// console.log(p1.nodeType);

// const pList = document.querySelectorAll('p')
// const p1 = pList[0]
// // attribute 可以作用到DOM结构里面
// p1.setAttribute('style','font-size: 50px')
// console.log(p1.getAttribute('style'));




// const list = document.getElementById('list')
// for(let i = 0;i<10;i++){
// 	const li = document.createElement('li')
// 	li.innerHTML  = `List item ${i}`
// 	list.appendChild(li)
// }
// 创建一个文档片段 此时还没有插入到 DOM 结构中
// const frag = document.createElement('fragment')
// const list = document.getElementById('list')
// for(let i = 0;i<10;i++){
// 	const li = document.createElement('li')
// 	li.innerHTML  = `List item ${i}`
//     // 先把 li 插入到 文档片段中
// 	frag.appendChild(li)
// }
// // 最后一次性插入到 DOM 结构中
// list.appendChild(frag)


// DOM 结构操作

// 1.增加删除节点
const div1 = document.getElementById('div1')
const newP = document.createElement('p')
newP.innerHTML = 'this is newP'
div1.appendChild(newP)

// 2. 移动节点 获取节点以后 用 appendChild 添加至想要移动到的区域
const p1 = document.getElementById('p1')
const div2 = document.getElementById('div2')
div2.appendChild(p1)

// 3.获取父元素
console.log(p1.parentNode);

// 4. 获取子元素列表 全部获取 不只有 p 标签 还有 text  可以用nodeType 来区分，一般标签为 1，text 为 3
const div1ChildNodes = div1.childNodes
console.log(div1ChildNodes);

// 按照一定规则找出想要的标签
// Array.prototype.slice.call(div1ChildNodes) 把 div1ChildNodes 变成数组
// filter 按照一定条件过滤
const div1ChildNodesP = Array.prototype.slice.call(div1ChildNodes).filter(child=>{
    if(child.nodeType === 1){
        return true
    }
    else{
        return false
    }
})
console.log(div1ChildNodesP );

// 删除一个 p 标签
div1.removeChild(div1ChildNodesP[0])
