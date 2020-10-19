import React from 'react'
import LoadingBar from 'react-redux-loading-bar'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'
import { MainWrapper } from './styled'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<LoadingBar />
			<MainWrapper>
				{children}
			</MainWrapper>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.any.isRequired
}

export default Layout
