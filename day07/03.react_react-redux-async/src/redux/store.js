// (1) 让redux支持异步编程,需要引入应用中间件
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
// 借助redux开发工具,将reducers
import { composeWithDevTools } from "redux-devtools-extension";

// (2) 让redux支持异步编程,引入thunk中间件(需要下载redux-thunk包)
import thunk from "redux-thunk";

let middleWare = applyMiddleware(thunk);
// wepack打包时,会自动添加的NODE_ENV如果是开发环境,则应用redux开发工具,生产环境不用
if (process.env.NODE_ENV === "development") {
  middleWare = composeWithDevTools(applyMiddleware(thunk));
}

// (3) 让redux支持异步编程,创建store时,传入applyMiddleware(thunk)
const store = createStore(reducers, middleWare);

// 暴露store
export default store;
