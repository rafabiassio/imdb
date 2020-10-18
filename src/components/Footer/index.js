import React from 'react'
import PropTypes from 'prop-types'
import {
	Github as GithubIcon,
	Linkedin as LinkedinIcon,
} from 'grommet-icons'
import { Box, Text } from 'grommet'

import { FooterWrapper, Link } from './styled'

const Footer = () => {

	const Signature = () => (
		<Box align="center" direction="row" gap="small">
			<Text color="brand">
				@ Designed by Rafael Biassio
      	</Text>
			<Link
				a11yTitle="Github"
				href="https://github.com/rafabiassio"
				icon={<GithubIcon color="brand" />}
				target="_blank"
			/>
			<Link
				a11yTitle="Linkedin"
				href="https://www.linkedin.com/in/rafael-biassio/"
				icon={<LinkedinIcon color="brand" />}
				target="_blank"
			/>
		</Box>
	)

	return (
		<FooterWrapper>
			<Signature />
		</FooterWrapper>
	)
}

Footer.propTypes = {}

export default Footer
