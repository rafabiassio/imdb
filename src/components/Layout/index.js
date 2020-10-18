import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'
import { MainWrapper } from './styled'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
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
