import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// 必须引入flexible,自动设置html的字体大小,用于解决rem适配问题
import "./flexible";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
