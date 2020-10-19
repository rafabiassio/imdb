import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
	Box,
	Grid,
	ResponsiveContext
} from 'grommet'

import Movie from '../Movie'

const MovieGrid = ({ movies, baseUrl, imageSizes }) => {
	const size = useContext(ResponsiveContext)

	return (
		<Box pad="medium">
			<Grid
				columns={size !== 'small' ? '250px' : '100%'}
				gap="small"
			>
				{movies.map((movie, index) => (
					<Movie
						key={index}
						title={movie.title}
						releaseDate={movie.release_date}
						voteAverage={movie.vote_average}
						voteCount={movie.vote_count}
						imagePath={movie.poster_path}
						baseUrl={baseUrl}
						size={imageSizes[3] || imageSizes[0]}
					/>
				))}
			</Grid>
		</Box>
	)
}

MovieGrid.propTypes = {
	movies: PropTypes.array.isRequired,
	baseUrl: PropTypes.string.isRequired,
	imageSizes: PropTypes.array.isRequired
}

export default MovieGrid
