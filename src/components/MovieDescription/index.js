import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Text } from 'grommet'

const MovieDescription = ({ label, value, type }) => {
	let textValue = value

	switch (type) {
		case 'currency':
			if (!+value) {
				return null
			}
			textValue = `$ ${value}`
			break
		case 'number':
			if (!+value)
				return null
		default:
			if (!value) {
				return null
			}
			break
	}

	return (
		<Box
			direction="row"
			align="center"
			gap="xsmall"
		>
			<Heading level="4" margin="none">
				{label}
			</Heading>
			<Text size="large">
				{textValue}
			</Text>
		</Box>
	)
}

MovieDescription.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string
}

export default MovieDescription
