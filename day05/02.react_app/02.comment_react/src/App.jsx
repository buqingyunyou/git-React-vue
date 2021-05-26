// 引入react,并将Component属性解构出来
import { Component } from "react";
import AddCommont from "./pages/AddComment";
import CommentList from "./pages/CommentList";

// export default xxx默认导出
export default class Commment extends Component {
  // 定义state数据
  state = {
    comments: [{ key: 1, username: "丁元英", content: "hello,芮小丹" }],
  };

  // 定义添加state数据的方法,传递给AddComent组件,在子组件中调用
  addComment = (comment) => {
    const { username, content } = comment;
    // 获取state数据
    let { comments } = this.state;
    // 将comment添加到state数组中
    this.setState({
      comments: [{ username, content, key: Date.now() }, ...comments], //key使用时间戳(修改)
    });
  };

  // 定义删除state中数据的方法,传递给CommentList,在传递给CommentItem组件
  deleteComment = (key) => {
    // 根据id删除对应数据
    const { comments } = this.state;
    
    const newComments = comments.filter((item, index) => {
      return item.key !== key; //id不相同的保留,相同的被过滤掉
    });
    console.log(key, newComments);
    this.setState({
      comments: newComments,
    });
  };

  render() {
    // 获取state
    const { comments, display } = this.state;
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
            {/* 引入AddComment组件,并传递addComment方法 */}
            <AddCommont addComment={this.addComment} />
          </div>

          <div className="col-md-8">
            {/* 引入CommentList组件,并传递state数据,和删除deleteComment方法 */}
            <CommentList
              comments={comments}
              deleteComment={this.deleteComment}
            />
          </div>
        </div>
      </div>
    );
  }
}
