import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Menus from './Menus';
import { withRouter } from 'dva/router';

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

class MyLayout extends React.Component{
  render () {
    const { children } = this.props;
    console.log(children);
    return (<Layout>
      <Header className="header">
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{lineHeight: '64px'}}
        >
          <Menu.Item key="1">
            <Link to="/users">users</Link>
          </Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{background: '#fff'}}>
          <Menus menuData={menudata}/>
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>)
  }
}

export default withRouter(connect(({menu})=>({menu}))(MyLayout));
