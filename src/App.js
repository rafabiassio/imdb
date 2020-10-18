import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'
import { Grommet } from 'grommet'
import theme from './theme'

const App = () => {
	return (
		<Grommet theme={theme}>
			<HashRouter>
				<Routes />
			</HashRouter>
		</Grommet>
	)

}

export default App
