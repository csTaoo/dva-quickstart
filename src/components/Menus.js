import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;

function Menus({menuData}) {

  const getMenus = (menuTree) => {

    return menuTree.map((item) => {

      if (item.children) {
        return (
          <SubMenu
            key={item.id}
            title={<span><Icon type="user" /><span>菜单</span></span>}
          >
            {getMenus(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.id}>
          <Link to={item.url} style={{color: '#999'}}>
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      )
    })
  }

  const menuItem = getMenus(menuData);
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      {menuItem}
    </Menu>
  );

}

export default Menus
