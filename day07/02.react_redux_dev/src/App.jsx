import React, { Component } from "react";
import { increment, decrement } from "./redux/actions-creator";
import PropTypes from "prop-types";
// 引入react-redux的connect高阶组件
/* 
  所谓高阶组件:
    本质是一个函数
    返回值是一个组件
*/
import { connect } from "react-redux";

class App extends Component {
  // 声明接收容器组件props传递是store数据和更新数据的方法
  static propTypes = {
    count: PropTypes.number.isRequired,
    // 这里的increment是包装了dispatch的action方法
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    // incrementAsync: PropTypes.func.isRequired,
  };

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
    this.add();
  };
  addAsync = () => {
    // setTimeout(() => {
    //   this.add();
    // }, 1000);
    // 简化写法
    setTimeout(this.add, 1000);
  };


  render() {
    // 获取props传递下来的数据,渲染到页面
    let { count } = this.props;
    if (count <= 0) {
      count = 0;
    }
    // const count = store.getState() >= 0 ? store.getState() : 0;
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

// 返回一个要传递给UI组件的对象 (包含需要使用的数据)
// const mapStateToProps = (state) => {
//   return {
//     // state是redux管理的所有的数据
//     count: state,
//   };
// };
// 返回一个要传递给UI组件对象 (包含的更新数据的方法)
// const mapDispatchToProps = (dispatch) => {
//   // dispatch是redux中的store.dispatch,会自动传入
//   return {
//     add(num) {
//       // 更新数据
//       const action = increment(num);
//       dispatch(action);
//     },
//     sub(num) {
//       // 更新数据
//       const action = decrement(num);
//       dispatch(action);
//     },
//   };
// };

/* 
  connect高阶组件:
    1.概念: 本质上是是个函数,执行函数会返回一个新的组件
    2.作用: 复用代码
  const NewComp = connect(mapStateToProps,mapDispatchToProps)(App);
    App-->UI组件
    NewComp-->容器组件
*/
// connect高阶组件,调用两次;
// 第一次调用传的实参: redux向当前UI组件传递的store数据和action方法
// 第二次调用传的实参: 传的是指定的UI组件


/* 
  connect()高阶组件:
    用于包装UI组件, 生成容器组件
  mapStateToProps()
    用于将state对象数据, 转换为UI组件的标签属性, 也就是传递给UI组件
  mapDispatchToProps()
    用于将分发action的函数, 转换为UI组件的标签属性, 也就是传递给UI组件
  
  简化写法:
    connect((state)=>({count:state}),{increment,decrement})(App);
*/
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// 简化写法:
export default connect((state)=>({count:state}), {increment,decrement})(App);
