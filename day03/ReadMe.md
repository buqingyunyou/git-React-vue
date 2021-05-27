# React(构建用户界面的 js 库) 框架

创建 react 应用的脚手架: create-react-app 库
发送 ajax 请求的库: axios 库

## React 简单使用

- 简单使用,即不使用组件的方式开发
- 下载三个包 react,react-dom,babel
- 在`<script type="text/babel"></script>`中开发代码
- 使用 JSX 语法开发,类似模板字符串的形式,可以简单快速创建虚拟 DOM
- 最后使用 ReactDOM.render 将虚拟 DOM 渲染到页面

## React 组件定义和 ReactDOM 渲染页面

1. 组件定义有两种

   - 工厂函数组件的定义
     function Component1 (){
     return <h1>xxx</h1>
     }

     - 工厂函数组件中,this 指向 undefined,无法实现复杂的功能

   - es6 类组件的定义
     class Component2 extends React.Component{
     render(){
     return <h1>xxx</h1>
     }
     }
     - 类组件中,this 指向组件实例对象,对象上有诸多属性,通过属性值进行数据的存储和传递,可以实现复杂的功能

2. ReactDOM.render(<组件 />,页面容器)
   1. 通过 ReactDOM 调用 render 方法,内部完成的步骤:
   - new 调用类组件,创建组件实例化对象 constructor()
   - 操作实例对象 state 属性的值 getDerivedStateFromProps
   - 调用 render()方法,生成虚拟 DOM 树
   - 发送 ajax 请求,绑定一次性定时器,绑定一次性事件等
   - 将虚拟 DOM 树,渲染到页面容器

## React 组件实例对象的 state 属性,props 属性,ref 属性

   1. state 属性
    - state 属性的值,是一个对象
    - 通常用于保存原始数据
    - 将数据和虚拟 DOM 对象进行关联,可以实现动态控制页面的更新
      使用规则:
       - 如果页面有变化,则必须定义state属性
       - 如果定义的state保存的数据,在几个组件中都要使用,则将数据保存到,几个组件最近公共的父组件上 
      使用:
        1.类组件中,定义state属性,并初始化值
        2.在事件回调函数,或者其他被允许的生命回调函数中,修改state属性值,this.setState()
        3.在组件render()函数中,获取state值,this.state,并将其关联到虚拟DOM对象
       

   2. props 属性
    - props属性的值,也是一个对象
    - 通常用于将数据从组件外,向组件内进行传递
    - 使用规则:
      在组件标签上添加属性,则会自动将这些属性,添加到该组件实例对象的props属性值中
    - 使用:
        1. 组件标签上添加属性kv;
        2. 在组件内定义props数据约束(检查),符合条件才被允许,不符合条件的数据会报错
        3. 在数组内使用this.props可以获取到传递进来的数据

   3. ref 属性
    - ref属性的作用:
      1. 如果给虚拟dom元素添加ref属性,则会将该虚拟dom元素关联的真实dom元素,添加到其指定的ref容器中`xxxRef.current`
      2. 如果给组件标签添加ref属性,则会将该组件的实例对象,添加到其指定的ref容器中

