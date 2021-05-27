import { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class Search extends Component {
  // 接收props数据前的检查
  static propTypes = {
    setIsLoading: PropTypes.func.isRequired,
    setUsers: PropTypes.func.isRequired,
  };

  // 收取表单数据,使用受控组件
  state = {
    searchName: "",
  };

  // 因为父组件render,会导致所有子组件render,但当前需求中,Search组件不需要render,可通过shouldComponentUpdate()进行优化
  // 原则上,只要state和props数据产生变化,都要返回true,让子组件render,但当前需求中,props数据是函数,是不变的;因此,只需要比较新旧state数据,是否相同
  shouldComponentUpdate(newProps,newState) { //注意:参数一是新props数据,参数二是新state数据
    // console.log(oldState,oldProps);
    // console.log(this.state,this.props); //当前生命周期函数中的this.state,this.props是旧数据
    if(newState.searchName === this.state.searchName){
      // 如果新旧数据相等,则不会render
      return false;
    }
    return true;
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
    const { setIsLoading, setUsers } = this.props;
    const { searchName } = this.state;
    if (!searchName) {
      alert("请输入查询用户名");
      return;
    }

    // 点击后,要显示loading..., 所以要修改isloading为true
    setIsLoading(true);

    try {
      // 点击后,要发送ajax请求到服务器
      const res = await axios({
        method: "GET",
        url: `https://api.github.com/search/users?q=${searchName}`,
      });
      // 如果响应成功, 将isloading再次修改为原来的false
      setIsLoading(false);
      // 将响应的数据添加到users中,调用setUsers方法
      // 1. 先将需要的数据处理成所需要的users
      const users = res.data.items.map((users) => ({
        key: users.id,
        login: users.login,
        avatar_url: users.avatar_url,
        html_url: users.html_url,
      }));
      // 2. 调用setUsers,将users数据传进去
      setUsers(users);
    } catch (error) {
      // 如果响应失败,则需要进行错误提示
      alert("网络连接错误~");
      setIsLoading(false);
      console.log(error);
    }
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
