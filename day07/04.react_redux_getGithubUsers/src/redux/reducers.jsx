import { combineReducers } from "redux";

function users(prevState = [], action) {
  switch (action.type) {
    // 注意: 此处case匹配的是同步action工厂函数的  action.type
    case "SET_USERS":
      // 注意: 直接返回state的数据  action.data
      return action.data;
    default:
      return prevState;
  }
}
function loading(prevState = false, action) {
  switch (action.type) {
    case "SET_LOADING":
      return action.data;
    default:
      return prevState;
  }
}

// export default Reducers;
// 将多个reducers整合为一个暴露
export default combineReducers({ users, loading });
