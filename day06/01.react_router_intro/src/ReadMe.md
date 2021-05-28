# React 前端路由

## 前端路由的作用

- 一般用于开发单页面应用

## 单页面应用

1. 整个应用,只有一个完整的页面
2. 页面不会出现跳转,不会整体刷新,只会局部刷新(更新组件,更新地址)
3. 可以通过 ajax 请求和后台进行数据交互

## React 前端路由下载包

- `react-router-dom`

## React 前端路由, 常用的组件

- BrowserRouter / HashRouter
  - 包裹主组件所有虚拟 DOM 标签
  - 声明使用`history路由模式`,或者 hash 路由模式
- Link / NavLink
  - `<NavLink to="/home/message/1"></NavLink>`
  - 链接,点击后`更新路由地址`,不会刷新页面,不会更新组件
- Route
  - `<Route path="/home/message/1" componet={Message}>`
  - 路由,根据路由地址,`自动挂载和卸载指定组件`,实现局部刷新页面
- Redirect
  - `<Redirect to='/home/message/1'/>`
  - 重定向,无法匹配上前端路由的地址,统一被重定向到指定的路由地址
- Switch
  - 包裹 Route 组件,限制只加载一个 Route 组件

## 路由跳转的两种方式

- link 链接跳转
- 编程式导航
