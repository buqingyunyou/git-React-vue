//webpack的入口文件

import React from 'react';
import ReactDOM from 'react-dom';
// 引入App组件(默认导入,如果是其他导入,则是import{...})
import App from './App.jsx';
import './App.sass';

ReactDOM.render( < App / > , document.getElementById('root'));