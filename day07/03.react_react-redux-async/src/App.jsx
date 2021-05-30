import React, { Component } from "react";
import PropTypes from "prop-types";
import { increment, decrement,incrementAsync } from "./redux/actions-creator";
// 引入react-redux的connect高阶组件connect
import { connect } from "react-redux";

class App extends Component {
  // 声明接收, 容器组件props传递是state数据和分发action的方法
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  };

  // 受控组件,收集表单数据
  state = {
    num: 1,
  };
  handlerChange = (e) => {
    // 更新state数据
    this.setState({
      num: +e.target.value,
    });
  };

  add = () => {
    // 调用props传递下来的方法add
    this.props.increment(this.state.num);
  };

  sub = () => {
    // 调用props传递下来的方法sub
    this.props.decrement(this.state.num);
  };

  addIfOdd = () => {
    // 获取props传递的count数据
    const { count } = this.props;
    if (count % 2 === 0) return;
    // 调用上面的add方法
    this.add();
  };

  addAsync = () => {
    this.props.incrementAsync(this.state.num);
  };

  render() {
    // 获取props传递下来的数据,渲染到页面
    let { count } = this.props;
    count = count <= 0 ? 0 : count;
    return (
      <div>
        <h1>Clicked {count} times</h1>
        <select onChange={this.handlerChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.addIfOdd}>increment if odd</button>
        <button onClick={this.addAsync}>increment async</button>
      </div>
    );
  }
}

export default connect((state) => ({ count: state }), { increment, decrement,incrementAsync })(
  App
);
