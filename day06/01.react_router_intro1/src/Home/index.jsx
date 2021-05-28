import React, { Component } from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import News from '../News';
import Message from '../Message';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home组件内容</h1>
        <ul className="nav nav-tabs">
          {/* 链接切换地址 */}
          <li><NavLink to="/home/news">News</NavLink></li>
          <li><NavLink to="/home/message">Message</NavLink></li>
        </ul>
        <Switch>
          {/* 路由Route切换组件 */}
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/message" component={Message}></Route>
          {/* 默认重定向指定路由路径 */}
          <Redirect to="/home/news"></Redirect>
        </Switch>
      </div>
    )
  }
}
