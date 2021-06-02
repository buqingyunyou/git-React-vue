import axios from "axios";
import { ActionCreator, AsyncActionCreator, Users,User } from "./types";
import { SET_LOADING, SET_USERS } from "./constants";
import { Dispatch } from "redux";

// 定义同步action
export const setLoading: ActionCreator<boolean> = (loading) => {
  return {
    type: SET_LOADING,
    data: loading,
  };
};
// 定义同步action
export const setUsers: ActionCreator<Users> = (users) => {
  return {
    type: SET_USERS,
    data: users,
  };
};

// 定义异步方法
export const getUsers: AsyncActionCreator<string> = (searchName) => {
  return async (dispatch:Dispatch) => {
    const res = await axios({
      method: "GET",
      url: `https://api.github.com/search/users?q=${searchName}`,
    });
    // 解构users (array类型)
    const users:Users = res.data.items.map((user:User) => ({
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
    }));
    // 分发action
    dispatch(setUsers(users));
  };
};
