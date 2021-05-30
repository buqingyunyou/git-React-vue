import React from "react";
import ReactDOM from "react-dom";
// 引入App.jsx组件
import App from "./App";

/* 
  react-redux插件库
    用于简化在react应用中使用redux

  react-Redux将所有组件分为两类:
    1. UI组件
      a. 只负责UI的呈现,不带有任何业务逻辑
      b. 通过props接收数据(store对象中的state数据和更新数据的函数)
      c. 不使用任何Redux的API
      
    2. 容器组件
      a. 负责管理数据和业务逻辑,不负责UI的呈现
      b. 使用Redux的API
*/
import { Provider } from "react-redux";
import store from "./redux/store";

// 渲染到root容器
ReactDOM.render(
  <React.StrictMode>
    {/* 
      将store对象传递给所有组件(主要指:后代容器组件)
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
