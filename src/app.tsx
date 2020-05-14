import React from 'react'
import ReactDom from 'react-dom'
import "antd/dist/antd.css"
import LayoutRender from './router/router';
import { createStore, MainContext } from './redux/redux'
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

const App = () => <LayoutRender />

ReactDom.render(
	<MainContext.Provider value={store}>
		<App />
	</MainContext.Provider>,
	document.getElementById("app")
)
