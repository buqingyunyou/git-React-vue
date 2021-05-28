import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    megs: [
      { index: 1, title: "mes1", content: "mes1的内容" },
      { index: 2, title: "mes2", content: "mes2的内容" },
      { index: 3, title: "mes3", content: "mes3的内容" },
    ],
  };

  render() {
    const { megs } = this.state;
    console.log(this.props.location.search);
    const meg = megs.find((meg) => {
      // 获取路由参数形式传递数据,获取数据this.props.match.params.xx
      return meg.index === +this.props.match.params.index;
    });
    return (
      <div>
        <h3>Mes{meg.index}</h3>
        <ul>
          <li>index:{meg.index}</li>
          <li>title:{meg.title}</li>
          <li>content:{meg.content}</li>
          {/* 在路由路径中,以查询字符串形式传递数据,获取数据this.props.location.search */}
          {/* <li>姓名:{this.props.location.search.substr(1).split('&')[0].split('=')[1]}</li> */}
          {/* <li>性别:{this.props.location.search.substr(1).split('&')[1].split('=')[1]}</li> */}
          <li>爱好:{this.props.location.state?this.props.location.state.hobby:""}</li>
        </ul>
      </div>
    );
  }
}
