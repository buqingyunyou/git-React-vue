import React from "react";
import ReactDOM from "react-dom";
// 引入App.jsx组件
import App from "./App";

// 引入样式index.css文件
import "./index.css";

// 渲染到root容器
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
