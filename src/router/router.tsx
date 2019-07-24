import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import routerConfig, { RouterConfig } from './router.config'

const loop:any = (routes: RouterConfig[] = []) => {
  return routes && routes.map((value: RouterConfig) => {
    if (value.component) {
      if (value.routes) {
        return (
          <Route key={value.path} path={value.path} render={(props) => (
            <value.component>
              { loop(value.routes) }
            </value.component>
          )} />
        )
      } else {
        return (
          <Route key={value.path} path={value.path} component={value.component} />
        )
      }
    } else {
      if (value.routes){
        return loop(value.routes)
      }
    }
  })
}

const LayoutRender: React.FC = (props) => {
  let L = routerConfig
  return (
    <Router>
      { loop(routerConfig) }
    </Router>
  )
}

export default LayoutRender