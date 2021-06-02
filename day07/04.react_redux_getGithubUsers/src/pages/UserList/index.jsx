import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// (1) 第一步:先定义UI组件
class UserList extends Component {
  // 接收props数据前进行检查
  static propTyeps = {
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    const { users, isLoading } = this.props;

    if (isLoading) {
      return <h1>Loading.......</h1>;
    }

    // 接收state数据
    if (users.length) {
      return (
        <div className="row">
          {/* 渲染数组数据时,一定要记得进行map */}
          {users.map((user) => {
            console.log(user);
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
          {/* <h1 style={{ display: "none" }}>Loading.......</h1> */}
        </div>
      );
    }
    return <h1>Enter name to search</h1>;
  }
}

// (2) 第二步: 给UI组件包裹一层容器组件,并将容器组件中的state数据或分发action传递给当前UI组件
export default connect(
  (state) => ({
    isLoading: state.loading,
    users:state.users,
  }),
  null
)(UserList);
