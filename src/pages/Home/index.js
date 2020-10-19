import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { Wrapper, Title } from './styled'
import MovieGrid from '../../components/MovieGrid'
import Pagination from '../../components/Pagination'
import { getUpcomingRequest } from '../../store/modules/movie/actions'
import { HOME, MOVIE_DETAIL } from '../../routes/paths'

const Home = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()
	const [allowList, setAllowList] = useState(false)
	const [allowPagination, setAllowPagination] = useState(false)
	const {
		movies = [],
		imageSizes = {},
		page,
		totalResults,
		totalPages
	} = useSelector((state) => ({
		movies: state.movie.movies,
		imageSizes: state.movie.imageSizes,
		page: state.movie.page,
		totalResults: state.movie.totalResults,
		totalPages: state.movie.totalPages
	}))

	useEffect(() => {
		const { state, pathname } = location
		const pageValue = state?.page || pathname.split('/').reverse()[0]
		let requestProps = {}

		if (pageValue) {
			requestProps = { page: pageValue }
		}
		dispatch(getUpcomingRequest(requestProps))
	}, [])

	useEffect(() => {
		if (imageSizes?.base_url && imageSizes?.poster_sizes) {
			setAllowList(true)
		}
	}, [imageSizes])

	useEffect(() => {
		if (totalResults > 0) {
			setAllowPagination(true)
		}
	}, [totalResults])

	const handlePageAction = ({ pageValue }) => {
		dispatch(getUpcomingRequest({ page: pageValue }))
		history.push({
			pathname: `${HOME.url}${pageValue}`,
			state: { page: pageValue }
		})
	}

	const handleMovieDetail = ({ movieId }) => {
		history.push({
			pathname: `${MOVIE_DETAIL.url}${movieId}`,
			state: { id: movieId }
		})
	}

	return (
		<Wrapper>
			<Title>
				Upcoming Movies
			</Title>
			{allowList &&
				<MovieGrid
					movies={movies}
					baseUrl={imageSizes?.base_url}
					imageSizes={imageSizes?.poster_sizes}
					handleClickAction={handleMovieDetail}
				/>
			}
			{allowPagination &&
				<Pagination
					page={page}
					totalPages={totalPages}
					totalResults={totalResults}
					handlePageAction={handlePageAction}
				/>
			}
		</Wrapper>
	)
}

Home.propTypes = {
	movies: PropTypes.array,
	imageSizes: PropTypes.object
}

export default Home
