// webpack打包入口模块

// 使用import引入react核心库,react-dom操作dom库
import React from "react";
import ReactDOM from "react-dom";
// 引入主组件
import App from "./App";
// 在入口文件中引入css样式
import './index.css';

// 主组件渲染到页面容器
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,document.getElementById('root')
);
