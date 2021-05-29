import React, { Component } from "react";
import store from "./redux/store";
import { increment, decrement } from "./redux/actions-creator";

export default class App extends Component {
  // 受控组件,收集表单数据
  state = {
    num: 1,
  };
  handlerChange = (e) => {
    // 收集value数据
    this.setState({
      num: +e.target.value,
    });
  };

  add = () => {
    // 调用创建action对象的函数,生成action对象
    const action = increment(this.state.num);
    // 调用dispatch方法,触发reducers函数,从而更新redux数据
    store.dispatch(action);
  };
  sub = () => {
    // 创建action
    const action = decrement(this.state.num);
    // 触发reducers函数调用
    store.dispatch(action);
  };

  componentDidMount() {
    // 定义订阅redux数据变化的的回调函数,如果变化,则重新渲染
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    // 获取redux的数据,渲染到页面
    const count = store.getState() >= 0 ? store.getState() : 0;
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
        <button>increment if odd</button>
        <button>increment async</button>
      </div>
    );
  }
}
