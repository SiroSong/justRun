import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import routerConfig from './router.config'

const loop:any = (routes: RouterConfig[] = []) => {
	return routes && routes.map((value: RouterConfig) => {
		if (value.component) {
			if (value.routes) {
				return (
					<Route
						key={value.path}
						path={value.path}
						render={(props) => {
							if (value.redirect) {
								return <Redirect to={{pathname: value.redirect}} />
							}

							return (
								<value.component {...props} routeInfo={value}>
									{ loop(value.routes) }
								</value.component>
							)
						}}
					/>
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

const renderRoute = (routes: RouterConfig[], routerArray: any[] = []): any => {
	!!routes && routes.map((route: RouterConfig) => {
		if (route.routes) {
			renderRoute(route.routes, routerArray)
		}
		if (route.component) {
			routerArray.push(
				<Route
					key={route.path}
					path={route.path}
					children={<route.component routeInfo={route} />}
				/>
			)
		}
	})

	return routerArray
}

const LayoutRender: React.FC = () => {
	return (
		<Router>
			{ loop(routerConfig) }
		</Router>
	)
}

export default LayoutRender