import { Component } from "react";
import AddComment from "./pages/AddComment";
import CommentList from "./pages/CommentList";

export default class App extends Component {

  render() {
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
            <AddComment />
          </div>

          <div className="col-md-8">
            <CommentList />
          </div>
        </div>
      </div>
    );
  }
}
