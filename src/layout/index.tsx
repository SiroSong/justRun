import React from 'react'
import { BrowserRouter, NavLink, } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu';

import "./index.css"

const { Header, Sider, Content } = Layout;
const { useState, useEffect } = React

const MenuRender = (routes: RouterConfig) => {
  return routes.routes && routes.routes.map((route: RouterConfig) => {
    if (route.routes) {
      return (
        <SubMenu
          key={route.path}
          title={
            <span>
              <Icon type={route.icon} />
              <span>{route.title}</span>
            </span>
          }
        >
          { MenuRender(route) }
        </SubMenu>
      )
    } else {
      return route.visible !== true && (
        <Menu.Item key={route.path}>
          <NavLink to={route.path}>
            <Icon type={route.icon} />
            <span>{route.title}</span>
          </NavLink>
        </Menu.Item>
      )
    }
  })
}

const LayoutComponent: React.FC<{
  routeInfo: RouterConfig,
  location: Location,
}> = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="layout-sider"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={[props.location.pathname]}>
          { MenuRender(props.routeInfo) }
        </Menu>
      </Sider>
      <Layout>
        <Header className="header_layout">
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content className="content_layout">
          { props.children }
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent