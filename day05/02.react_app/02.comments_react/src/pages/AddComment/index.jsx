import { Component } from "react";
import PropTypes from "prop-types";

export default class AddComment extends Component {
  // 接收props中方法
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  };

  // 受控组件,收集表单数据
  state = {
    username: "",
    content: "",
  };

  // 使用高阶函数定义onChange事件,收集表单数据
  handlerChange = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value.trim(),
      });
    };
  };

  //点击提交按钮,更新App组件的原数据
  handlerSubmit = (e) => {
    e.preventDefault();
    const { addComment } = this.props;
    const { username, content } = this.state;
    if (!username) {
      alert("请输入用户名");
      return;
    }
    if (!content) {
      alert("请输入评论");
      return;
    }
    addComment(username, content);

    // 清空输入框
    this.setState({
      username: "",
      content: "",
    });
  };

  render() {
    const { username, content } = this.state;
    return (
      <form className="form-horizontal" onSubmit={this.handlerSubmit}>
        <div className="form-group">
          <label>用户名</label>
          <input
            type="text"
            className="form-control"
            placeholder="用户名"
            onChange={this.handlerChange("username")}
            value={username}
          />
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea
            className="form-control"
            rows="6"
            placeholder="评论内容"
            onChange={this.handlerChange("content")}
            value={content}></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-default pull-right">提交</button>
          </div>
        </div>
      </form>
    );
  }
}
