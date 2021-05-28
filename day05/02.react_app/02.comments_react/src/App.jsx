import { Component } from "react";
import AddComment from "./pages/AddComment";
import CommentList from "./pages/CommentList";

export default class App extends Component {
  state = {
    comments: [
      // { key: 1, username: "定格", content: "你好" },
      // { username: "戈迪根", content: "hello" },
    ],
  };

  // 更新state数据的方法
  addComment = (username, content) => {
    let { comments } = this.state;
    this.setState({
      comments: [{ key: Date.now(), username, content }, ...comments],
    });
  };

  render() {
    const { comments } = this.state;

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="col-md-4">
            <AddComment addComment={this.addComment} />
          </div>

          <div className="col-md-8">
            <CommentList comments={comments} />
          </div>
        </div>
      </div>
    );
  }
}
