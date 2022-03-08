vue面试的简单题



1.MVC和MVVM的区别

```
A.MVC:model view cotroller 模型视图控制器 
1.model：应用程序中用来处理应用数据逻辑的部分。通常模型对象负责在数据库中存储数据
2.view：应用程序中用来处理数据显示的部分。通常视图是依据模型数据写的
3.controller：处理用户交互的部分。从视图读取数据，控制用户输入，并向模型发送数据
一句话：controller负责把model的数据给view显示出来

B.MVVM：新增了VM类 也就是ViewModel层
1.将模型转换为视图 和 把视图转换为模型
2.实现了view和model的自动同步，model变了，view就会自动改变，不用我们手动写dom

```

2.为什么data是一个函数

```
如果写成对象：使得所有组件实例共用一个data，一个变了，所有的都会变
写成函数：数据以返回值来定义，每复用一次，都会返回一个新的data，类似于给每个组件创建了一个私有空间，各自维护
```

3.Vue组件有哪些通信方式

```
1.子组件和父组件相互通信：
1）父组件向子组件通过props传值，子组件通过emit触发事件向父组件传值
2）children和parent：获得当前组件的父组件和当前组件的子组件

2.A->B->C传值：attrs和listeners

3.父组件通过provide来提供变量，子组件用inject来注入变量

4.$refs 获取组件实例（这个属性，可以让model直接操作view）

5.envetBus兄弟组件传值，vuex状态管理
```



4.vue的生命周期

```
1.beforeCreate：实例初始化之后，data observer和event/watcher事件配置前。当前阶段，data，methods，computed和watch都不能访问；
2.created：实例已经创建完成后调用，这一步，实例已经完成了data observer， 属性和方法的运损，watch、event事件回调。没有el，如果要操作dom，可以用vm.nextTick来访问

3.beforeMount：挂载之前调用，相关的render函数首次被调用
4.mounted：挂载完成后，数据已经完成了双向绑定。可以访问dom

5.beforeUpdate：数据更新时，可以在这个钩子里进一步改变状态，不会触发附加的重渲染过程
6.updated:发生在更新以后，dom已经完成更新，尽量避免更改数据，在服务器渲染期间不会被调用

7.beforeDestroy：实例销毁前，比如说清除计时器
8.destroyed：实例销毁后，vue实例所有东西都会解除绑定

9.activated：组件激活
10.deactivated：组件销毁
```

异步请求：created，beforeMount，mounted 因为data已经创建



5.v-if和v-show的区别

```
v-if：条件不满足不渲染，适合运行时很少改变条件
v-show：条件不满足，display：none，频繁切换
```

display:none和visvility：hidden和opacity：0的区别

```

```

6.vue内置指令（挺多的）

```
v-model
v-if
v-show
v-bind：绑定属性
v-on：监听dom事件

```



7.怎么理解vue的单向数据流

```
数据总是从父组件传到子组件，子组件不能修改数据，只能请求父组件修改
实在要改，可以可以在data里定义一个变量，用props的值初始化，然后用emit来通知父组件修改
```

8.computed和watch

```
1.computed只有计算属性，以来其它属性的计算值 并且computed的值有缓存，只有当值有变化时才会返回内容
2.watch用来监听，被监听的值有变化就会执行回调，进行一些逻辑操作
```

9.v-if和v-for为什么不建议一起使用

```
v-for比v-if优先级高，所以使用的话，每次v-for都会执行v-if,造成不必要的计算，影响性能，尤其是当之需要渲染很小一部分的时候。可以选择使用computed过滤掉列表中不需要显示的项目
```

