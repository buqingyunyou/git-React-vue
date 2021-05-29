# React 前端路由

## 前端路由的作用

- 一般用于开发单页面应用

## 单页面应用

1. 整个应用,只有一个完整的页面
2. 页面不会出现跳转,不会整体刷新,只会局部刷新(更新组件,更新地址)
3. 可以通过 ajax 请求和后台进行数据交互

## 路由的概念

`路由, 是key-value的映射关系`
`前端路由的key是路由路径, value是路由组件`

## React 前端路由下载包

- `npm install react-router-dom`

## React 前端路由常用组件

- BrowserRouter / HashRouter
  - 使用: 作为 App 组件的根元素,包裹在最外层
  - 声明使用`history路由模式`,或者 hash 路由模式
- Link / NavLink
  - `<NavLink to="/home/message/1">xxx</NavLink>`
  - 链接,点击后`更新路由地址`,不会刷新页面,不会更新组件
- Route
  - `<Route path="/home/message" componet={Message}>`
  - 根据路由地址,`自动挂载和卸载指定组件`,实现局部刷新页面
- Redirect
  - `<Redirect to='/home/message/1'/>`
  - 重定向,无法匹配上前端路由的地址,统一被重定向到指定的路由地址
- Switch
  - 包裹 多个 Route 组件,限制只加载匹配上的一个 Route 组件

## 前端路由跳转的两种方式

- (1) Link/NavLink 组件设置`to`属性,进行跳转
  `<NavLink to="/home/message">xxx</NavLink>`
- (2) 编程式导航
  定义一个按钮,在按钮点击事件中,使用 history.push(xx)跳转
  `this.history.push("/home/message/1")`
  `this.hitory.replace("/home/message/2")`
  `this.history.goBack()`
  `this.history.goForward()`

## 路由组件间的数据传递的三种方式

- (1) 通过路由参数传递 
  - 传实参
    `<NavLink to="/home/2">xx</NavLink>`
  - 定义
    `<Route path="/home/:id" component={Home}/>`
  - 接收
    `this.props.match.params.id`
- (2) 通过查询字符串传递

  - 传参
    `<NavLink path="/home?name=sz&age=18" component={Home}></NavLink>`
  - 接收
    `this.props.location.search`

- (3) 通过 state 参数传递
  - 传参
    在当前组件事件函数中`return this.props.history.push("/home/1",{name:sz,age:19})`
  - 接收
    `this.props.location.state`

## Route 组件中 path 默认匹配规则

- `<Route path="/" component={Home}>`
- 只要地址栏的路由路径是以 `/ 开头`,就能匹配上
- 可通过添加 exact 属性,将匹配规则修改为全等匹配,要求路由路径和 path 值完全一致

## 路由组件概念

- 由 Route 组件挂载的组件,都叫路由组件

## 路由组件三大属性

- history 属性

  - goBack()方法 进行路由地址的切换 (切换到上一个路由地址)
  - goForward()方法 进行路由地址的切换 (切换到下一个路由地址)
  - push()方法 进行路由地址的切换 (跳转其他地址)
  - replace()方法 进行路由地址的切换 (替换当前地址)
  - 切换路由地址,发送数据

- location 属性

  - search 属性 保存传递进来的查询字符串
  - state 属性 保存以 push()/repalce()传递进来的数据

- match 属性
  - path 属性
  - url 属性
  - params 属性 保存以路由参数形式传递进来数据

## 动态路由概念

- `所谓动态路由,就是一个路由组件,匹配多个路由地址`
- `多个路由地址,通过传参形式,将数据传递给路由组件,组件根据数据,渲染不同的页面效果`
