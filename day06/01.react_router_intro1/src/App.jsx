import React, { Component } from "react";
// 引入路由组件
import About from "./About";
import Home from "./Home";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 定义链接,切换路由地址 */}
              <NavLink to="/about" className="list-group-item">
                About
              </NavLink>

              <NavLink className="list-group-item myActive" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  {/* 根据地址,切换组件 */}
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Redirect to="/home"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
