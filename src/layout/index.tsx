import React from 'react'
import { BrowserRouter, NavLink, } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

import "./index.css"
import routerConfig, { RouterConfig } from '../router/router.config';
import SubMenu from 'antd/lib/menu/SubMenu';

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
            <span>{route.title}</span>
          </NavLink>
        </Menu.Item>
      )
    }
  })
}

const LayoutComponent: React.FC = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} className="layout-sider">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            { MenuRender(routerConfig[0]) }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => setCollapsed(!collapsed)}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            { props.children }
          </Content>
        </Layout>
      </Layout>
  )
}

export default LayoutComponent