import { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    isLoading: false,
    repo: {},
  };
  // 发送ajax请求
  componentDidMount() {
    // 发送请求之前,将isLoading该为true
    this.setState({
      isLoading: true,
    });

    axios
      .get("https://api.github.com/search/repositories?q=r&sort=stars")
      .then((res) => {
        const { name, html_url } = res.data.items[0];
        this.setState({
          isLoading: false,
          repo: { name, html_url },
        });
      })
      .catch((error) => {
        alert("网络错误~");
        console.log(error);
      });
  }

  render() {
    const { isLoading, repo } = this.state;
    if (isLoading) {
      return <h1>loading....</h1>;
    }

    return <h2>most star repo is <a href={repo.html_url}>{repo.name}</a></h2>;
  }
}
