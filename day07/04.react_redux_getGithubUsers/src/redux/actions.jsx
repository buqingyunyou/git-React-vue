import axios from "axios";

// 定义操作isLoading的的方法
export const setLoading = (isLoading) => {
  return {
    type: "SET_LOADING",
    data: isLoading,
  };
};

// 异步操作,分为三步:
// (1) 第一步: 是在外面定义action工厂函数
export const setUsers = (users) => {
  return {
    type: "SET_USERS",
    data: users,
  };
};

// (2) 第二步: 定义包装同步action工厂函数的异步函数
export const getUsers = (searchName) => {

  return async (dispatch) => {

    try {
      // 异步操作,发送请求
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
      // 返回一个指示action对象
      // return {
      //   type: "GET_USERS",
      //   data: users,
      // };
      // console.log(users);

      console.log(users);
      // (3) 第三步: 分发action对象(在异步函数中,调用同步action工厂函数)
      dispatch(setUsers(users));

    } catch (error) {
      alert("网络连接错误~");
      setLoading(false);
      console.log(error);
    }
  };
};
