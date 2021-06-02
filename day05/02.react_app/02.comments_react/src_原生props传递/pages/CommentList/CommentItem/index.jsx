import { Component } from "react";
import PropTypes from "prop-types";

export default class CommentItem extends Component {
  // 接收props检查
  static propTypes = {
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  render() {
    // 接收props数据
    const { username, content } = this.props;

    return (
      <li className="list-group-item">
        <div className="handle">
          <button>删除</button>
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
