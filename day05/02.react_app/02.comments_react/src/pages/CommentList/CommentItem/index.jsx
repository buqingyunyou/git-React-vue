import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeComment } from "../../../redux/actions";

class CommentItem extends Component {
  // 接收props检查
  static propTypes = {
    comment: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired,
  };

  del = () => {
    const { removeComment, comment } = this.props;
    // 传入key,调用removeComment方法
    removeComment(comment.key);
  };

  render() {
    // 接收props数据
    const { username, content } = this.props.comment;

    return (
      <li className="list-group-item">
        <div className="handle">
          <button onClick={this.del}>删除</button>
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
// 包裹一个容器组件,将删除评论的方法传递进去
export default connect(null, { removeComment })(CommentItem);
