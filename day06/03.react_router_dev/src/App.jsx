import React, { Component } from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <ul>
            {routes.map((route) => {
              return (
                <li key={route.path}>
                  <NavLink to={route.path}>{route.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </header>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                // 只要是遍历数组,则每个遍历项必须设置唯一key
                key={route.path}
                path={route.path}
                component={route.component}
                // exact,将path的匹配规则,调整为全等匹配
                exact
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}
