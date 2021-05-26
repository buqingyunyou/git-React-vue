import { Component } from "react";
import PropTypes from "prop-types";

export default class AddComment extends Component {
  // 接收props数据前的检查
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  };

  // 使用state和onChange事件自动收集表单数据
  state = {
    username: "",
    content: "",
  };

  // 通过高阶函数的方式进行复用事件回调函数 (修改后)
  handlerChange = (key) => {
    return (event) => {
      this.setState({
        [key]: event.target.value.trim(),
      });
    };
  };

  handlerSubmit = (e) => {
    // 阻止默认提交
    e.preventDefault(); //(修改后)
    // 获取state
    const comment = this.state;
    // 添加前进行判断,是否输入为空
    if (!comment.username) {
      alert("请输入用户名");
      return;
    }
    if (!comment.content) {
      alert("请输入评论");
      return;
    }
    // 接收addComment方法
    const { addComment } = this.props;
    // 点击后将state数据,添加到App组件的state中
    addComment(comment);
    // 点击之后,要清空输入框
    this.setState({
      username: "",
      content: "",
    });
  };

  render() {
    // 获取state
    const { username, content } = this.state;
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handlerSubmit}>
          <div className="form-group">
            <label>用户名</label>
            {/* 给input绑定onChange事件 */}
            <input
              type="text"
              value={username}
              onChange={this.handlerChange("username")}
              className="form-control"
              placeholder="用户名"
            />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            {/* 给textarea绑定onChange事件 */}
            <textarea
              className="form-control"
              value={content}
              onChange={this.handlerChange("content")}
              rows="6"
              placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
