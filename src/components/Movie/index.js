import React from 'react'
import PropTypes from 'prop-types'
import dateFormat from 'dateformat'
import {
	Box,
	Card,
	Heading,
	CardBody,
	Text,
	Image,
} from 'grommet'
import {
	Group as GroupIcon,
	Favorite as FavoriteIcon
} from 'grommet-icons'

import { CardTextWrapper, CardContent, TextCard } from './styled'

const Movie = (props) => {
	const {
		title,
		releaseDate,
		voteAverage,
		voteCount,
		imagePath,
		baseUrl,
		size
	} = props

	const CardDescription = () => {
		const formatDate = (date) => dateFormat(date, 'dd/mm/yyyy')
		const toPercent = (value) => `${value * 10}%`

		return (
			<CardTextWrapper>
				<Box width="100%">
					<Heading level="5" margin="none">
						{title}
					</Heading>
					<Box direction="row" justify="between">
						<TextCard>
							{formatDate(releaseDate)}
						</TextCard>
						<Box direction="row" gap="xsmall" align="center">
							<FavoriteIcon size="small" />
							<TextCard>
								{toPercent(voteAverage)}
							</TextCard>
							<GroupIcon size="small" />
							<TextCard>
								{voteCount}
							</TextCard>
						</Box>
					</Box>
				</Box>
			</CardTextWrapper>
		)
	}

	return (
		<Card width="medium" justify="center">
			<CardContent>
				<CardBody height="medium">
					<Image
						fit="cover"
						src={baseUrl + size + imagePath}
					/>
				</CardBody>
				<CardDescription />
			</CardContent>
		</Card>
	)
}

Movie.propTypes = {
	props: PropTypes.shape({
		title: PropTypes.string.isRequired,
		releaseDate: PropTypes.string.isRequired,
		voteAverage: PropTypes.string.isRequired,
		voteCount: PropTypes.string.isRequired,
		imagePath: PropTypes.string.isRequired,
		baseUrl: PropTypes.string.isRequired,
		size: PropTypes.string.isRequired
	})
}

export default Movie
