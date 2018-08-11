import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Menus from './Menus';
import { withRouter } from 'dva/router';
import Trigger from './trigger.css';

const { Header, Content, Sider } = Layout;

const menudata = [
  {
    id : 'menu1',
    name : '菜单',
    children : [{
      id : 'submenu1',
      name : '用户列表',
      url : '/users'
    }]
  },
  {
    id : 'menu2',
    name : '菜单',
    children : [{
      id : 'submenu2',
      name : '登陆页',
      url : '/login'
    }]
  }
];

class LeftRightLayout extends  React.Component{

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render(){
    const {children} = this.props;
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Menus menuData={menudata}/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={Trigger.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(connect(({states})=>({states}))(LeftRightLayout));
