import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'antd'
import "antd/dist/antd.css"
import PropTypes from 'prop-types'
import LayoutRender from './router/router';
import { createStore, Provider } from './redux/redux'
import { ActionType } from './redux/type'
// import "./app.less"

const reducer = (state: any, action: ActionType) => {
	if (action.type === 'add') {
		return {
			num: state.num + 1
		}
	}
}

const store = createStore(reducer, {num: 0})

class App extends React.Component {

	render () {
		return (
			<LayoutRender />
		)
	}
}

ReactDom.render(
	<Provider value={store}>
		<App />
	</Provider>,
	document.getElementById("app")
)
