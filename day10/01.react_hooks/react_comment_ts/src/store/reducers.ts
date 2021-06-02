import { SET_LOADING, SET_USERS } from "./constants";
import { Action, Users } from "./types";

import { combineReducers } from "redux";

// 定义setLoading函数的形状接口
interface SetLoading {
  (prevState: boolean, action: Action<boolean>): boolean;
}
let initLoading: boolean = false;
// reducers模块的action是action对象
const loading:SetLoading = (prevState = initLoading, action) =>{
  switch (action.type) {
    case SET_LOADING:
      return action.data;
    default:
      return prevState;
  }
}
// 定义getUsers函数的形状接口
interface GetUsers {
  (prevState:Users,action:Action<Users>):Users
}
let initUsers: Users = [];
const users:GetUsers = (prevState = initUsers, action)=> {
  switch (action.type) {
    case SET_USERS:
      return action.data;
    default:
      return prevState;
  }
}
// 整合多个reducers函数为一个
export default combineReducers({ loading, users });
