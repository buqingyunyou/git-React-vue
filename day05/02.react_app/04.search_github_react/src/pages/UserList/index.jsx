import { Component } from "react";
import PropTyeps from "prop-types";

export default class UserList extends Component {
  // 接收props数据前的检查
  static propTypes = {
    isLoading: PropTyeps.bool.isRequired,
    users: PropTyeps.array.isRequired,
  };

  render() {
    // 接收props
    const { isLoading, users } = this.props;
    // 渲染虚拟DOM

    // 判断是否显示loading
    if (isLoading) {
      return (
        <h2 style={{ display: isLoading ? "block" : "false" }}>Loading...</h2>
      );
    }
    // 判断数组是否有元素,使用length判断,不能直接使用数组转布尔,因为数组转布尔一定是true
    if (users.length) {
      return (
        <div className="row">
          {users.map((item) => {
            return (
              // 渲染的列表项必须有唯一的key属性
              <div className="card" key={item.key}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img src={item.avatar_url} style={{ width: "100px" }} />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            );
          })}
        </div>
      );
    }
    return <h3>Enter name to search...</h3>;
  }
}
