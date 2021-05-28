import React, { Component } from "react";
import Detail from "../Detail";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

export default class Message extends Component {
  // 编程式导航
  push = (key) => {
    return () => {
      // 使用参数二进行传参(参数二),将Message组件中的数据,传递给Detail组件
      return this.props.history.push(key,{name:'jack',age:18})
    };
  };

  
  replace = (key) => {
    return () => {
      return this.props.history.replace(key)
    };
  };
  back = ()=>{
    return this.props.history.goBack();
  }
  forward = ()=>{
    return this.props.history.goForward();
  }

  render() {
    return (
      <div>
        <h1>Message</h1>
        <ul>
          <li>
            <NavLink to="/home/message/1">Message001</NavLink>
            {/* 在路由路径上,以查询字符串方式传递参数 */}
            <button onClick={this.push("/home/message/1?name=rose&gender=female")}>跳转push</button>
            <button onClick={this.replace("/home/message/1")}>
              跳转replace
            </button>
          </li>
          <li>
            <NavLink to="/home/message/6">Message006</NavLink>
            <button onClick={this.push("/home/message/6")}>跳转push</button>
            <button onClick={this.replace("/home/message/6")}>
              跳转replace
            </button>
          </li>
          <li>
            <NavLink to="/home/message/8">Message008</NavLink>
            <button onClick={this.push("/home/message/8")}>跳转push</button>
            <button onClick={this.replace("/home/message/8")}>
              跳转replace
            </button>
          </li>
        </ul>
        <button onClick={this.back}>上一步</button>
        <button onClick={this.forward}>下一步</button>
        <Switch>
          {/* :id动态路由,以路由参数形式,传递参数 */}
          <Route path="/home/message/:id" component={Detail}></Route>
          <Redirect to="/home/message/1"></Redirect>
        </Switch>
      </div>
    );
  }
}
