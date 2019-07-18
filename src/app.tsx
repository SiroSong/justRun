import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'antd'
import "antd/dist/antd.css"
import LayoutComponent from './layout';
// import "./app.less"

class App extends React.Component {
  render () {
    return (
      <LayoutComponent />
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById("app")
)
