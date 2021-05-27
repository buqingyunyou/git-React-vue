# React 使用 react 脚手架开发项目

## 使用 react 脚手架的作用

概括: 帮助开发人员快速构建模板项目

    1. react脚手架配置了服务端
    2. react脚手架指定了webpack所有依赖包
    3. react脚手架配置所有需要的配置
    4. 可以使用npm start直接运行,实现简单效果

    使用react脚手架开发项目,可以专注代码,不需要考虑构建项目,指定和配置依赖包(编译,语法检查,压缩等)

## react 提供一个用于创建 react 项目的脚手架库 create-react-app

## react 项目完整技术架构: react + webpack4 + es6 + eslint + babel

## 使用 react 脚手架构建项目的特点: 模块化,组件化,工程化

1. 模块化
   - index.js 入口文件(webpack 打包开始的模块 js 文件,引入组件文件)
   - App.jsx 组件(其他组件嵌套在内,需要暴露出去,各组件都要求 export 暴露出去,其他组件需要则要进行 import 引入)
   - public/index.html 页面(webpack 打包后,会自动将 js 文件,css 文件引入其中)
2. 组件化
   - 组件是 js 代码,css 代码,html 代码混合,实现的一块用户界面;
   - 各组件间可以传递数据 (props)
3. 工程化
   - 使用 webpack 进行构建项目和打包代码

## 使用 react 脚手架的开发流程

1. 创建项目并启动
   npm 版本 6+
   - 创建项目 `npm init react-app hello-react`
   - 启动服务器,并访问页面
     - cd hello-react
     - npm start
       npm 版本 5,7
   - 下载脚手架至全局 `npm i create-react-app -g`
   - 创建 react 应用 `create-react-app hello-react`
   - 启动服务器
     - cd hello-react
     - npm start

## react 脚手架项目结构

hello-react
| --node_modules 第三方依赖模块文件夹
| --public 项目静态资源文件夹
|--index.html 主页面
| --src 源码文件夹
|--pages 其他组件文件夹
|--index.js webpack 入口 js 文件
|--App.js 主组件模块文件
| --.gitignore git 版本管制忽略的配置文件
| --package.json 应用包配置文件 npm init 生成的配置包
| --README.md 应用描述说明文件

## 原型

1. 原型概念

   - 原型是属性,分为显示原型属性 `prototype` 和隐式原型属性`__proto__`
   - 除箭头函数以外的函数,都具备显示原型属性
   - 所有对象都具备隐式原型属性

2. 原型属性规则

   - 对象的`隐式原型属性值`,指向其构造函数的`显示原型属性的值`
   - Function 构造函数的隐式原型,指向其显示原型
   - 显示原型属性的值,是一个对象,对象中存在一个 constructor 属性,指向函数本身

3. 原型链
   - 由隐式原型属性值组成的结构,叫原型链
   - 原型链作用: 用于`属性及方法的继承和复用`
   - 原型链查找规则: (1)先在自身找,如无;(2)沿着原型链一层层向上找;(3)如果找到原型链的终点 null,则返回 undefined

## this 指向

1. this 概念

   - 是一个指针型变量,通常而言,指向函数被调用时的调用者

2. 根据函数分类,this 指向具备不同的特点
   - (1) 普通函数
     - 直接调用时,指向 window,如果开启严格模式,指向 undefined
     - 隐式调用时,指向调用的对象
     - 显示调用时(apply,call 调用),指向参数一
     - new 调用时,指向实例化对象
   - (2) 箭头函数
     - 箭头函数没有 this,默认指向最近外层函数的 this
   - (3) 回调函数
     - 定时器回调
       - this 指向 window,严格模式下,指向 undefined
     - 事件回调
       - this 指向事件绑定的 DOM 元素
   - (4) React 类组件中函数
     - 生命周期函数
       - this 指向组件实例对象
     - 其他函数
       - this 指向 undefined

## react 发送 ajax 请求

1.  react 本身只关注用户界面,并没有发送 ajax 的功能
2.  前端应用,通常需要借助 ajax 发送请求,和后台数据的交互
3.  react 应用中,可以集成第三方 ajax 库(进行发 ajax 请求)

## 常见发送 ajax 的第三方库

1.  jquery 库, 主要功能在于操作 DOM,发送 ajax 请求只是小功能,且不支持 promise,一般不用与集成到 react
2.  axios 库
    - 封装 XMLHttpRequest 对象的 ajax 库
    - 支持 promise
    - 可以在浏览器端和 node 服务端使用

- 下载 axios `npm i axios`(下载到开发环境)
