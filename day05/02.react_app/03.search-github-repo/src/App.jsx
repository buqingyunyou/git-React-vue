import { Component } from "react";
import axios from "axios";

export default class App extends Component {
  // 页面有变化
  state = {
    isLoading: false,
    repo: { name: "", html_url: "" },
  };

  // 生命周期函数,用于发请求
  componentDidMount() {
    // 发送请求前,修改isloading为true
    this.setState({
      isLoading: true,
    });

    // 发送请求
    axios
      .get("https://api.github.com/search/repositories?q=r&sort=stars")
      .then((res) => {
        // 响应成功
        const { name, html_url } = res.data.items[0];
        // 响应成功后将isLoading改为false
        this.setState({
          isLoading: false,
          repo: { name, html_url },
        });
      })
      .catch((error) => {
        alert("网络连接错误~");
        this.setState({
          isLoading: false,
        });
        console.log(error);
      });
  }

  render() {
    const { isLoading, repo } = this.state;
    // 如果name为空,则跳过
    if (repo.name) {
      return (
        <h1>
          most star repo is <a href={repo.html_url}>{repo.name}</a>
        </h1>
      );
    }
    // 根据isLoading值的变化,控制是否展示/隐藏
    // 特别注意: css样式是行内样式,不要style属性
    return (
      <h1 style={{ display: isLoading ? "block" : "none" }}>loading...</h1>
    );
  }
}
