import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from './store/store';

/* 
  react-redux:
    两大组件: 
      (1) Provider组件, 用于将store对象提供给下面所有的组件
      (2) connect高阶组件, 用于给UI组件包装一层容器组件, 并向UI组件传递需要的容器state数据和更新state的方法
*/
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
