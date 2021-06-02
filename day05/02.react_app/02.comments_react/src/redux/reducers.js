import { combineReducers } from "redux";

function comments(prevState = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // 添加key属性
      action.data.key = Date.now();
      // 添加comment到comments中 (使用数组解构复制,再添加值)
      return [action.data, ...prevState];

    case "REMOVE_COMMENT":
      // 过滤需要删除的数据
      const comments = prevState.filter((comment)=>{
        return comment.key !== action.data
      })
      return comments;
    default:
      return prevState;
  }
}

export default combineReducers({ comments });
