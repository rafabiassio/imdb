import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from 'grommet'

import { Title } from './styled'
import MovieGrid from '../../components/MovieGrid'
import { getUpcomingRequest } from '../../store/modules/movie/actions'

const Home = () => {
	const dispatch = useDispatch()
	const [allowList, setAllowList] = useState(false)
	const {
		movies = [],
		imageSizes = {}
	} = useSelector((state) => ({
		movies: state.movie.movies,
		imageSizes: state.movie.imageSizes
	}))

	useEffect(() => {
		dispatch(getUpcomingRequest())
	}, [])

	useEffect(() => {
		if (imageSizes?.base_url && imageSizes?.poster_sizes) {
			setAllowList(true)
		}
	}, [imageSizes])

	return (
		<Box>
			<Title>
				Upcoming Movies
			</Title>
			{allowList &&
				<MovieGrid
					movies={movies}
					baseUrl={imageSizes?.base_url}
					imageSizes={imageSizes?.poster_sizes}
				/>
			}
		</Box>
	)
}

Home.propTypes = {
	movies: PropTypes.array,
	imageSizes: PropTypes.object
}

export default Home
