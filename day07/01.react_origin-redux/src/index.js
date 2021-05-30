import React from "react";
import ReactDOM from "react-dom";
// 引入App.jsx组件
import App from "./App";
// 引入Provider组件(容器组件,包裹UI组件,用于给UI组件传递store数据和action方法)
import { Provider } from "react-redux";
import store from './redux/store';

// 渲染到root容器
ReactDOM.render(
  <React.StrictMode>
    {/* 使用Provider组件,将UI组件包裹起来,并将store传入给所有组件 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
