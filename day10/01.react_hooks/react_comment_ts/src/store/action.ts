import axios from "axios";
import { ActionCreator,AsyncActionCreator,Users}from './types';

// 定义同步action
export const setLoading: ActionCreator<boolean> = (Loading) => {
  return {
    type: "SET_LOADING",
    data: Loading,
  };
};
// 定义同步action
export const setUsers: ActionCreator<Users> = (users) => {
  return {
    type: "SET_USERS",
    data: users,
  };
};

// 定义异步方法
export const getUsers: AsyncActionCreator<string> = (searchName) => {
  return async (dispatch) => {
    const res = await axios({
      method: "GET",
      url: `https://api.github.com/search/users?q=${searchName}`,
    });
    // 解构users (array类型)
    const users = res.data.items.map((users) => ({
      key: users.id,
      login: users.login,
      avatar_url: users.avatar_url,
      html_url: users.html_url,
    }));
    // 分发action
    dispatch(setUsers(users));
  };
};
