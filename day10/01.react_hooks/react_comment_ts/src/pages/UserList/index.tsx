import { connect } from "react-redux";
import { RootState, Users } from "../../store/types";

// 定义接收参数props的类型
interface Props {
  loading: boolean;
  users: Users;
}

function UserList(props: Props) {
  // 接收数据
  const { loading, users } = props;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (users.length) {
    
    return (
      <div className="row">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
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
  return <h1>Enter Name To Search</h1>;
}

// 定义mapStateToProps方法,返回需要传入到UI组件的数据
const mapStateToProps = (state: RootState) => {
  return {
    loading: state.loading,
    users: state.users,
  };
};
// 此处不能用null, 只能使用{}
// const mapDispatchToProps = {};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
