import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Grid, Box, Image, Anchor, Heading, Text, Paragraph, Stack, Meter } from 'grommet'
import { Previous as PreviousIcon } from 'grommet-icons'

import { TagLabel } from './styled'
import MovieDescription from '../../components/MovieDescription'
import { getByIdRequest, clearContent } from '../../store/modules/movie/actions'
import { HOME } from '../../routes/paths'
import useWindowSize from '../../utils/useWindowSize'
import formatDate from '../../utils/formatDate'

const MovieDetail = () => {
	const history = useHistory()
	const location = useLocation()
	const dispatch = useDispatch()
	const [allowImage, setAllowImage] = useState(false)
	const [imageSize, setImageSize] = useState('')
	const { movie, imageSizes } = useSelector((state) => ({
		movie: state.movie.content,
		imageSizes: state.movie.imageSizes,
	}))
	const { width: windowWidth } = useWindowSize()

	useEffect(() => {
		const { state, pathname } = location
		const id = state?.id || pathname.split('/').reverse()[0]
		dispatch(getByIdRequest({ id }))

		return () => {
			dispatch(clearContent())
		}
	}, [])

	useEffect(() => {
		if (imageSize || (imageSizes?.base_url && imageSizes?.backdrop_sizes)) {
			const backdropSizes = imageSizes?.backdrop_sizes || []
			let size = backdropSizes[2]

			if (windowWidth > 1080) {
				size = backdropSizes[2]
			} else if (windowWidth > 420) {
				size = backdropSizes[1]
			} else {
				size = backdropSizes[0]
			}
			setImageSize(size)
		}
	}, [imageSizes, windowWidth])

	useEffect(() => {
		if (movie && imageSize) {
			setAllowImage(true)
		}
	}, [movie, imageSize])

	const handleBack = () => {
		history.goBack()
	}

	return (
		<Grid
			rows={['hair', 'medium', 'medium']}
			columns={['1/3', '2/3']}
			areas={[
				['header', 'header'],
				['poster', 'poster'],
				['auxiliar', 'main'],
			]}
			gap="medium"
			pad="medium"
		>
			<Box gridArea="header">
				<Anchor
					label={`Back to ${HOME.label}`}
					icon={<PreviousIcon />}
					onClick={handleBack}
				/>
			</Box>

			<Box gridArea="poster">
				{allowImage &&
					<Image
						src={imageSizes?.base_url + imageSize + movie.backdrop_path}
					/>}
			</Box>

			{movie &&
				<Box
					gridArea="auxiliar"
					gap="xxsmall"
					pad="small"
				>
					<Box
						direction="row"
						gap="xsmall"
						pad="xsmall"
					>
						{movie.genres
							.map((genre) => (
								<TagLabel
									key={genre.id}
									pad="xsmall"
									background="brand"
									round
								>
									{genre.name}
								</TagLabel>
							))}
					</Box>

					<MovieDescription
						label="Release date:"
						value={formatDate(movie.release_date)}
					/>
					<MovieDescription
						label="Runtime:"
						value={`${movie.runtime} minutes`}
					/>
					<MovieDescription
						label="Revenue:"
						value={movie.revenue}
						type="currency"
					/>
					<MovieDescription
						label="Budget:"
						value={movie.budget}
						type="currency"
					/>

					{(movie.vote_average > 0) &&
						<Box align="center" pad="large">
							<Stack anchor="center">
								<Meter
									type="circle"
									background="light-1"
									values={[{ value: (movie.vote_average * 10) }]}
									size="xsmall"
									thickness="small"
								/>
								<Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
									<Text size="xlarge" weight="bold">
										{movie.vote_average * 10}
									</Text>
									<Text size="small">%</Text>
								</Box>
							</Stack>
						</Box>
					}
				</Box>
			}

			{movie &&
				<Box
					gridArea="main"
					align="center"
					pad="small"
				>
					<Heading level="1" margin="none">
						{movie.title}
					</Heading>
					<Heading level="3" margin="none">
						{movie.tagline}
					</Heading>
					<Paragraph size="xlarge">
						{movie.overview}
					</Paragraph>
				</Box>
			}

		</Grid>
	)
}

MovieDetail.propTypes = {
	content: PropTypes.object,
	imageSizes: PropTypes.object
}

export default MovieDetail
