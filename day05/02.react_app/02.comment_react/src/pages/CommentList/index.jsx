import { Component } from "react";
import PropTypes from "prop-types";
import CommentItem from "./comments/CommentItem";

export default class CommentList extends Component {
  // 接收props数据comments前的检查
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
  };
  render() {
    // 接收props数据,并解构赋值
    const { comments, deleteComment } = this.props;
    // 判断comments长度是否为0,如果为0,则修改display为true  (修改后)
    const display = comments.length ? "none" : "block";

    return (
      <div>
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {/* 引入CommentItem组件,传递数据username,content */}

          {/* 遍历数组,传递元素到子组件,添加key属性 */}
          {comments.map((item) => {
            return (
              <CommentItem
                comment={item}
                deleteComment={deleteComment}
                key={item.key}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
