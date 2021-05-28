import { Component } from "react";
import {
  BrowserRouter as Router, //主要用于单页面react应用,在主组件的最外层包裹 (没有属性)
  //Link, //相当于a标签,阻止了默认跳转的行为,作用是:改变地址栏的路由地址(to属性)
  NavLink, //和Link组件一致,不同在于点击选中时,会添加active类
  Route, //根据地址栏的路由地址变化,动态挂载指定的自定义组件 (path属性,component属性)
  Switch, //用于包裹Route和Redirect组件,则在渲染页面时,只会渲染一个Route (没有属性)
  Redirect, //和Route组件同级,当其他Route没有匹配上时,指定重定向到哪个路由路径上 (to属性)
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router,根据路由路径,进行组件切换,实现页面局部刷新</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">
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
