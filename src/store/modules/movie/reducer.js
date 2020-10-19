import * as actions from './constants'

const initialState = {
	loading: false,
	content: null,
	movies: [],
	page: 1,
	totalResuls: 0,
	totalPages: 0,
	imageSizes: {},
	error: {},
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_UPCOMING.REQUEST:
			return { ...state, loading: true }
		case actions.GET_UPCOMING.SUCCESS:
			return {
				...state,
				loading: false,
				content: null,
				movies: action.data?.results || [],
				totalResuls: action.data?.total_results || 0,
				totalPages: action.data?.total_pages || 0,
			}
		case actions.GET_UPCOMING.FAILURE:
			return {
				...state,
				loading: false,
				error: {
					type: actions.GET_UPCOMING.FAILURE,
					error: action.data,
				},
			}

		case actions.GET_IMAGE_SIZES.SUCCESS:
			return {
				...state,
				loading: false,
				content: null,
				imageSizes: action.data?.images || {}
			}
		case actions.GET_IMAGE_SIZES.FAILURE:
			return {
				...state,
				loading: false,
				error: {
					type: actions.GET_IMAGE_SIZES.FAILURE,
					error: action.data,
				},
			}
		default:
			return state
	}
}
