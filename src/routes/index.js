import React from 'react'
import { Switch } from 'react-router-dom'

import pageRoutes from './routes'
import CustomRoute from './customRoute'

const Routes = () => {
	return (
		<Switch>
			{pageRoutes.map(route => (
				<CustomRoute
					key={route.path}
					exact={route.exact}
					path={route.path}
					component={route.component}
				/>
			))}
		</Switch>
	)
}

export default Routes
