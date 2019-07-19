import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/home';
import routerConfig from './router.config'

type RouterConfig = {
  path: string,
  component?: React.ComponentType
}

const RouterRender: React.FC = (props) => {
  const Home1 = require('../pages/home').default
  console.log(routerConfig)
  return (
    <Router>
      { formatRouter(routerConfig) }
      {/* <Route exact path="/" component={Home1} /> */}
    </Router>
  )
}
const formatRouter = (RC:RouterConfig[]) => {
  let routers: any[] = []
  RC.forEach((router: RouterConfig) => {
    let a = `${router.component}`
    routers.push(
      <Route exact path={router.path} component={router.component} key={router.path} />
    )
  })
  return routers
}

export default RouterRender