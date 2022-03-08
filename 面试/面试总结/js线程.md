1.js运行机制

#### 1）单线程：一个任务执行完了之后才可以执行下一个任务

##### 同步和异步

##### 同步：从头到尾按顺序执行

```
console.log(1);
console.log(2);
console.log(3);
```

##### 异步：先执行一部分，拿到结果或者到时间之后再执行另一部分

```
setTimeout(()=>{ console.log(1);},1000);
setTimeout(()=>{ console.log(2);},100);
setTimeout(()=>{ console.log(3);},1);
```

##### 同步加异步：先打10个1 再5 然后输出 1 2 3 

```
//单线程体现在 只有把同步任务执行完了 才可以执行异步的setTimeout 
for(let i =0;i<10;i++){
    console.log(1);
}
setTimeout(()=>{console.log(1);},0);
setTimeout(()=>{console.log(2);},0);
setTimeout(()=>{console.log(3);},0);
console.log(5);
```

### 2）事件循环

##### 同步→nextTick→异步→（当前事件循环结束后）setImmediate

```
for(let i =0;i<3;i++){
    console.log("syn" +1);
}
setTimeout(()=>{console.log("set" + 2);},0);
setTimeout(()=>{console.log("set" + 3);},10000); 
setTimeout(()=>{console.log("set" + 4);},0);

process.nextTick(()=>{
    console.log("next" +5);
})

setImmediate(()=>{
    console.log("immediate" +6);
})
//如果10000 那结果 syn1 syn1 syn1 next5 set2 set4 immediate6 set3
//如果10000改成0 结果 syn1 syn1 syn1 next5 set2 set3 set4 immediate6  
```

##### 运行栈和任务队列

```
运行栈和任务队列
运行栈里是同步任务
任务队列里是异步任务 比如说setTimeout时间到了，那么它的回调函数就会放进任务队列里，到了执行异步任务的时候，同一个事件循环里，就是setTimeout到点了，就会被依次执行。但是不只一个事件循环
```

#### 3）宏任务微任务

```
宏任务：计时器，ajax，读取文件
微任务：promise.then

```

#### 执行顺序

```
1.同步任务 new Promise里的resolve也是同步代码
2.process.nextTick
3.异步 事件循环有任务就执行（ 然后执行下个事件循环直到任务队列里没有了
3.微任务 promise.then
4.宏任务 计时器 ajax 读取文件
5.setImmediate
```

##### 测试题：

答案：25687314

```
 setImmediate(()=>{
    console.log(1);
})
 console.log(2);
setTimeout(()=>{console.log(  3);},0 );
setTimeout(()=>{console.log(  4);},100);
console.log(5);
new Promise((resolve)=>{
    console.log(6);
    resolve();
}).then(()=>{
    console.log(7);
}
   
)
process.nextTick(()=>{
    console.log(8);
})

```

4）promise 和 async函数

```
//promise是es6新增的一个对象 new Promise就行
let p = new Promise(()=>{
    console.log(1);
})
p.then(()=>{
    console.log(2);
})
//只输出1 没有2 只要调用了resolve才会执行then
let p = new Promise((resolve)=>{
    console.log(1);
    resolve();
})
p.then(()=>{
    console.log(2);
})
//输出 1 2
```



#### promise resolve 和 then用法

```
let p = new Promise((resolve)=>{ 
    resolve("hello world");
})
p.then((data)=>{
    console.log(data);
    //打印结果 hello world
})
// then 的形参是reslove的数据
```

#### async调用后返回的是promise对象

```
async function fun(){
    return 1
}
console.log(fun());
//输出 promise {1}; 
```

```
fun().then((data)=>{
    console.log(data);
})
//此时 可以拿到1
```

#### async+await可以直接拿到resolve里的值

async可以加await，await后面可以加promise对象

```
let p1 = new Promise((resolve)=>{
    resolve(1);
})

let p2 = new Promise ((resolve)=>{
    resolve(2);
})
async function fun(){
    let a = await p1;
    let b = await p2;
    console.log(a);
    console.log(b);
}
fun();
//输出 1 2
```

测试题13582674

```
 console.log(1);
 async function async1(){
     await async2()
     console.log(2);//相当于微任务
 }
 async function async2(){
     console.log(3);
 }
 async1()
 setTimeout(function(){
     console.log(4);
 },1);
 new Promise((resolve)=>{
     console.log(5);
     resolve();
 }).then(function(){
     console.log(6);
 }).then(function(){
     console.log(7);
 })
 console.log(8);
```

