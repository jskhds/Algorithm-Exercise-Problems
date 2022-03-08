vue数据的双向绑定

```
双向数据绑定无非就是在单向绑定的基础上给可输入元素（input、textare等）添加了change(input)事件，来动态修改model和 view，并没有多高深。所以无需太过介怀是实现的单向或双向绑定。
主要有三种办法（发布者-订阅者模式（backbone.js）脏值检查（angular.js）数据劫持（vue.js）），常用的是vue.js的数据劫持模式。

数据劫持: vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
```

 

```
//简单的双向数据绑定
//通过 Object.defineProperty 设置set和get函数，给dom节点添加监听事件，数据改变时（也就是重新写入数据触发set时），把对应的dom节点数据更新
 <div>
        <!-- 让input和p的值绑定 -->
        <input type="text" name="" id="text_id">
        <p id="p_id"></p>
  </div>
  <script >
    var xx_obj = {};
    Object.defineProperty(xx_obj, 'xx_val',{
    //读取数据时触发
    get:function(){
        console.log('get');
        return true
      },
      //写入数据时触发
      set:function(val){
        //  set拿到val之后就可以给input p赋值了
        document.getElementById("text_id").value = val;
        document.getElementById("p_id").innerHTML = val;
      }
  });
  document.addEventListener('keyup',function(e){
    xx_obj.xx_val = e.target.value;
})
   </script>

```

上面只是简单的数据绑定，有一个缺点是，如果一个一个操作dom节点，很麻烦。所以有了观察者模式：一对多的一种模式。在vue里面，改了一个data的数据，那么但凡用了这个data的地方，都会更新。

```
已经了解到vue是通过数据劫持的方式来做数据绑定的，其中最核心的方法便是通过Object.defineProperty()来实现对属性的劫持，达到监听数据变动的目的。  
要实现mvvm的双向绑定，就必须要实现以下几点：
1、实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
2、实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
3、实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图
4、mvvm入口函数，整合以上三者
```

```
一.实现observever：
1.监听：先取出所有数据遍历，之后就可以监听所有的属性值
2.通知订阅者：维护一个数组，用来收集订阅者，数据变动触发notify，再调用订阅者的update方法
3.订阅者：因为订阅者不只一个，所以每次都要清空前一个订阅者，添加一个新的订阅者
Watcher.prototype = {
    get: function(key) {
        Dep.target = this;
        this.value = data[key];    // 这里会触发属性的getter，从而添加订阅者
        Dep.target = null;
    }
```

```
二.实现compile
```

```
三.实现watcher
1、在自身实例化时往属性订阅器(dep)里面添加自己
2、自身必须有一个update()方法
3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调 
```

```
四.实现MVVM
MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。
```

