import { Component } from "react";
import Search from "./pages/Search";
import UserList from "./pages/UserList";

export default class App extends Component {
  state = {
    isLoading: false,
    users: [],
  };

  // 绑定更新isLoading的方法
  setIsLoading = (isLoading) => {
    this.setState({
      isLoading,
    });
  };

  // 绑定更新users的方法
  setUsers = (users) => {
    this.setState({
      users,
    })
  };

  render() {
    // 获取state
    const { isLoading, users } = this.state;
    // console.log(isLoading,users);
    return (
      <div>
        <div className="container">
          {/* 传递方法 */}
          <Search setIsLoading={this.setIsLoading} setUsers={this.setUsers} />
          {/* 传递数据 */}
          <UserList isLoading={isLoading} users={users}/>
        </div>
      </div>
    );
  }
}
