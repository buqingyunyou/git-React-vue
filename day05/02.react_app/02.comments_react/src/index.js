import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    {/* 向所有组件传递store对象 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
