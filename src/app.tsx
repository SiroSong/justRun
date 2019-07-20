import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'antd'
import "antd/dist/antd.css"
import LayoutRender from './router/router';
// import "./app.less"

class App extends React.Component {
  render () {
    return (
      <LayoutRender />
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById("app")
)
