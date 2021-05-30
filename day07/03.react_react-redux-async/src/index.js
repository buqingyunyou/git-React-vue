import React from "react";
import ReactDOM from "react-dom";
// 引入包裹UI组件的容器组件
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

// 渲染到root容器
ReactDOM.render(
  <React.StrictMode>
    {/* 
      将store对象传递给所有组件 (主要指:后代容器组件)
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
