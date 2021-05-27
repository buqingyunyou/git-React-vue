import { Component } from "react";
import PropTypes from "prop-types";

export default class UserList extends Component {
  // 接收props数据前进行检查
  static propTyeps = {
    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
  };

  render() {
    // 接收props数据
    const { isLoading, users } = this.props;

    // 如果users有数据,则渲染,没有则不渲染
    if (users.length) {
      return (
        <div className="row">
          {/* 渲染数组数据时,一定要记得进行map */}
          {users.map((user) => {
            return (
              <div className="card" key={user.key}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={user.avatar_url}
                    style={{ width: "100px" }}
                    alt={user.login}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })}
        </div>
      );
    }
    if (isLoading) {
      return (
        <h1 style={{ display: isLoading ? "block" : "none" }}>
          Loading.......
        </h1>
      );
    }
    return <h1>Enter name to search</h1>;
  }
}
