import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'antd'
import "antd/dist/antd.css"
import PropTypes from 'prop-types'
import LayoutRender from './router/router';
import { createStore, MainContext } from './redux/redux'
import { ActionType } from './redux/type'
// import "./app.less"

const reducer = (state: any, action: ActionType) => {
	if (!state) {
		return { num: 1 }
	}
	if (action.type === 'add') {
		return {
			num: state.num + 1
		}
	}
}

const store = createStore(reducer)

class App extends React.Component {

	render () {
		return (
			<LayoutRender />
		)
	}
}

ReactDom.render(
	<MainContext.Provider value={store}>
		<App />
	</MainContext.Provider>,
	document.getElementById("app")
)
