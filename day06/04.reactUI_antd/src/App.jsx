import React, { Component } from "react";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { PoweroffOutlined } from "@ant-design/icons";

export default class App extends Component {
  state = {
    loadings: [],
  };

  enterLoading = (e) => {
    this.setState(({loadings})=>{
      return {
        loadings:[true]
      }
    });

    setTimeout(()=>{
      this.setState(({loadings})=>{
        return {
          loadings:[false]
        }
      })
    },3000)
  };

  render() {
    const { loadings } = this.state;
    return (
      <div>
        <Button type="primary">主按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button type="text">文本按钮</Button>
        <Button type="link">链接按钮</Button>
        <br />
        <br />
        <Button type="primary" icon={<SearchOutlined />}>
          主按钮
        </Button>
        &nbsp;
        <Button
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}></Button>
        &nbsp;
        <Tooltip title="search">
          <Button type="primary">search</Button>
        </Tooltip>
        &nbsp;
        <Tooltip title="search">
          <Button icon={<SearchOutlined />}>search</Button>
        </Tooltip>
        <br />
        <br />
        <Button type="primary" loading>
          Loading
        </Button>
        &nbsp;
        <Button
          type="primary"
          onClick={this.enterLoading}
          loading={loadings[0]}
          icon={<PoweroffOutlined />}>
          click
        </Button>
      </div>
    );
  }
}
