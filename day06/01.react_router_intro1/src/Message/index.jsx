import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Detail from "../Detail";

export default class Message extends Component {
  push = (index) => {
    return () => {
      // 以编程式导航,push()的参数二,进行state数据传递
      return this.props.history.push(`/home/message/${index}`,{hobby:"敲代码"})
    };
  };
  replace = (index) => {
    return () => {
      return this.props.history.replace(`/home/message/${index}`)
    };
  };

  render() {
    return (
      <div>
        <h2>Message</h2>
        <ul>
          <li>
            {/* 在连接路由路径中,以查询字符串形式传递数据 */}
            <NavLink to="/home/message/1?name=rose&gender=female">
              Msg001
            </NavLink>
            <button onClick={this.push(1)}>push切换地址</button>
            <button onClick={this.replace(1)}>replace</button>
          </li>
          <li>
            <NavLink to="/home/message/2?name=jack&gender=male">Msg002</NavLink>{" "}
            <button onClick={this.push(2)}>push切换地址</button>
            <button onClick={this.replace(2)}>replace</button>
          </li>
          <li>
            <NavLink to="/home/message/3?name=lucky&gender=female">
              Msg003
            </NavLink>
            <button onClick={this.push(3)}>push切换地址</button>
            <button onClick={this.replace(3)}>replace</button>
          </li>
        </ul>
        <Switch>
          {/* :index 可实现多对一的效果(多个路由地址,对应一个组件) */}
          {/* :index 也是一种传递数据的方式, 路由参数传递 */}
          <Route path="/home/message/:index" component={Detail}></Route>
          <Redirect to="/home/message/1"></Redirect>
        </Switch>
      </div>
    );
  }
}
