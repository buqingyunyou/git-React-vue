import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// 引入的是action工厂函数
import { getUsers, setLoading } from "../../redux/actions";

class Search extends Component {
  // 声明接收props传入的参数
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
  };

  // 收取表单数据,使用受控组件
  state = {
    searchName: "",
  };

  shouldComponentUpdate(newProps, newState) {
    // 判断新旧state是否相等,如果不相等,返回true,如果相等,返回false (判断不等即可实现)
    return newState.searchName !== this.state.searchName;
  }

  // 定义onChange事件回调函数
  handlerChange = (e) => {
    // 更新当前state
    this.setState({
      searchName: e.target.value.trim(),
    });
  };

  // 定义点击搜索事件回调函数
  search = async () => {
    // 获取props数据
    const { getUsers, setLoading } = this.props;
    const { searchName } = this.state;
    // 判断为空return
    if (!searchName) {
      alert("请输入查询用户名");
      return;
    }

    // getUsers异步操作前,将isLoading设置为true,异步操作数据后,设置为false
    setLoading(true);
    // 调用getUsers方法(异步操作)
    await getUsers(searchName);
    setLoading(false);
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.handlerChange}
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
// 给Search组件传递getUsers方法
export default connect(null, { getUsers, setLoading })(Search);

