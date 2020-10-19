import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'grommet'
import {
	Previous as PreviousIcon,
	Next as NextIcon
} from 'grommet-icons'

import { Wrapper, PreviousButton, NextButton } from './styled'

const Pagination = ({ page, totalResults, totalPages, handlePageAction }) => {

	const handlePage = (type = 'next') => {
		const pageValue = type === 'next' ? (page + 1) : (page - 1)

		handlePageAction({ pageValue })
	}

	const PaginationInfo = () => (
		<Text>
			{`${page} - ${totalPages} of ${totalResults} result${totalResults > 1 ? 's' : ''}`}
		</Text>
	)

	return (
		<Wrapper>
			<PreviousButton
				reverse
				label="Previous page"
				icon={<PreviousIcon />}
				onClick={() => handlePage('back')}
				disabled={page < 2}
			/>
			<PaginationInfo />
			<NextButton
				reverse
				label="Next page"
				icon={<NextIcon />}
				onClick={() => handlePage('next')}
				disabled={page === totalPages}
			/>
		</Wrapper>
	)
}

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	totalResults: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	handlePageAction: PropTypes.func.isRequired
}

export default Pagination
