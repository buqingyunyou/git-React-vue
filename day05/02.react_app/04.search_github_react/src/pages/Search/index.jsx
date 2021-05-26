import { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class Search extends Component {
  // 接收props前的检查
  static propTypes = {
    setIsLoading: PropTypes.func.isRequired,
    setUsers: PropTypes.func.isRequired,
  };

  // 初始state
  state = {
    searchName: "",
  };

  handlerChange = (e) => {
    // 更新state
    this.setState({
      searchName: e.target.value.trim(),
    });
  };

  search = async () => {
    // 接收props数据
    const { setIsLoading, setUsers } = this.props;
    // 获取state
    const { searchName } = this.state;
    if(!searchName){
      alert('请输入查询内容');
      return;
    }
    // 点击后修改isLoading为true
    setIsLoading(true);

    try {
      // 点击发送查询请求axios请求
      const res = await axios({
        method: "GET",
        url: `https://api.github.com/search/users?q=${searchName}`,
      });
      // 处理返回的数据
      const users = res.data.items.map(item=>({
        key:item.id,
        login:item.login,
        avatar_url:item.avatar_url,
        html_url:item.html_url
      }))
      // console.log(users);
      setIsLoading(false);
      // 调用setUsers方法,更新userList组件
      setUsers(users);
      
    } catch (error) {
      alert("网络连接错误~");
      console.log(error);
    }
  };

  render() {
    
    return (
      <div>
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
      </div>
    );
  }
}
