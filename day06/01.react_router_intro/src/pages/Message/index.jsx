import React, { Component } from "react";
import Detail from "../Detail";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

export default class Message extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/home/message/1">Message001</NavLink>
          </li>
          <li>
            <NavLink to="/home/message/6">Message006</NavLink>
          </li>
          <li>
            <NavLink to="/home/message/8">Message008</NavLink>
          </li>
        </ul>
        <Switch>
          {/* :id可以进行props数据传递,传递给component指定组件 */}
          <Route path="/home/message/:id" component={Detail}></Route>
          <Redirect to='/home/message/1'></Redirect>
        </Switch>
      </div>
    );
  }
}
