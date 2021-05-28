import { Component } from "react";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";

export default class CommentList extends Component {
  // 接收props
  static propTypes = {
    comments: PropTypes.array.isRequired,
  };

  render() {
    // 接收props
    const { comments } = this.props;

    if (!comments.length) {
      return (
        <div>
          <h3 className="reply">评论回复：</h3>
          <h2 style={{ display: "block" }}>暂无评论，点击左侧添加评论！！！</h2>
        </div>
      );
    }

    return (
      <div>
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: "none" }}>暂无评论，点击左侧添加评论！！！</h2>

        <ul className="list-group">
          {
            // 遍历数组,传递数据
            comments.map((comment, index) => {
              return (
                <CommentItem
                  key={comment.key}
                  username={comment.username}
                  content={comment.content}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}
