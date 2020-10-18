import React from 'react'
import { Switch } from 'react-router-dom'

import pageRoutes from './routes'
import CustomRoute from './customRoute'
import Layout from '../components/Layout'

const Routes = () => {
	return (
		<Switch>
			{pageRoutes.map(route => (
				<CustomRoute
					key={route.path}
					exact={route.exact}
					path={route.path}
					component={route.component}
					parent={Layout}
				/>
			))}
		</Switch>
	)
}

export default Routes
