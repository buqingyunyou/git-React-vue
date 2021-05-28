// 将路由的相关信息,配置到一个js文件中,再通过模块暴露和引入的方式使用
import Home from '../pages/Home';
import News from '../pages/News';
import Pins from '../pages/Pins';
import Books from '../pages/Books';
import Events from '../pages/Events';
const routes = [
  { path: "/", component:  Home , title: "首页" },
  { path: "/books", component:  Books , title: "小册" },
  { path: "/events", component:  Events , title: "活动" },
  { path: "/pins", component:  Pins , title: "沸点" },
  { path: "/news", component:  News , title: "资讯" },
];

export default routes;
