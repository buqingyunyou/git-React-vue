import { Component } from "react";
import PropTyeps from "prop-types";

export default class CommentItem extends Component {
  // 对接收的props数据进行检查
  static propTyeps = {
    comment:PropTyeps.object.isRequired, //(修改后)
    deleteComment: PropTyeps.func.isRequired,
  };

  // 点击后,调用App组件传递进来的方法,用于更新App组件的state,从而从新渲染页面
  handlerDeleteClick = (e) => {
    const { comment, deleteComment } = this.props;
    // 调用App组件传递下来的deleteComment方法
    const { username } = comment;
    // 删除前进行弹窗提示
    if (!window.confirm(`您确认要删除${username}的评论吗?`)) {
      return;
    }
    deleteComment(comment.key);
  };

  render() {
    // 接收props数据
    const { username, content } = this.props.comment;
    // console.log(key,username,content);
    return (
      <li className="list-group-item">
        <div className="handle">
          <button onClick={this.handlerDeleteClick}>
            删除
          </button>
        </div>
        <p className="user">
          <span>{username}</span>
          <span>说:</span>
        </p>
        <p className="centence">{content}</p>
      </li>
    );
  }
}
