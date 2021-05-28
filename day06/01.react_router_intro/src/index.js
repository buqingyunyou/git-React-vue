import React from "react";
import ReactDOM from "react-dom";
// 引入App.jsx组件
import App from "./App";


// 渲染到root容器
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
