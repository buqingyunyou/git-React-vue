// 主组件模块 rcc
import { Component } from "react";
// 通过标签形式,引入子组件模块
import Search from "./pages/Search";
import UserList from "./pages/UserList";

// 必须通过export暴露出去
export default class App extends Component {
  // 定义原数据state
  state = {
    isLoading: false,
    users: [],
  };

  // 定义更新isLoading的方法  (只需要将setState()在此进行处理,其他的逻辑处理,在子组件调用前处理)
  setIsLoading = (isLoading) => {
    this.setState({
      isLoading,
    });
  };

  // 定义更新users的方法
  setUsers = (users) => {
    this.setState({
      users,
    });
  };

  render() {
    // 获取原数据state
    const { isLoading, users } = this.state;
    return (
      <div id="app">
        <div className="container">
          {/* 将两个更新state的方法,传递下去 */}
          <Search setIsLoading={this.setIsLoading} setUsers={this.setUsers}/>
          {/* 将原数据传递给UserList,渲染到页面 */}
          <UserList isLoading={isLoading} users={users} />
        </div>
      </div>
    );
  }
}
