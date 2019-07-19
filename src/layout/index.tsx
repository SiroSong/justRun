import React from 'react'
import { BrowserRouter, NavLink, } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

import "./index.css"
import RouterRender from '../router/router';

const { Header, Sider, Content } = Layout;
const { useState, useEffect } = React

const LayoutComponent: React.FC = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} className="layout-sider">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
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
            <RouterRender />
          </Content>
        </Layout>
      </Layout>
  )
}

export default LayoutComponent