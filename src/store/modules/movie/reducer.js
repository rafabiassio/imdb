import * as actions from './constants'

const initialState = {
	loading: false,
	content: null,
	movies: [],
	page: 1,
	totalResults: 0,
	totalPages: 0,
	imageSizes: {},
	error: {},
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.CLEAR_CONTENT:
			return {
				...state,
				content: null
			}
		case actions.GET_UPCOMING.REQUEST:
			return { ...state, loading: true }
		case actions.GET_UPCOMING.SUCCESS:
			return {
				...state,
				loading: false,
				movies: action.data?.results || [],
				totalResults: action.data?.total_results || 0,
				totalPages: action.data?.total_pages || 0,
				page: action.data?.page || 1,
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

		case actions.GET_BY_ID.REQUEST:
			return { ...state, loading: true }
		case actions.GET_BY_ID.SUCCESS:
			return {
				...state,
				loading: false,
				content: action.data,
			}
		case actions.GET_BY_ID.FAILURE:
			return {
				...state,
				loading: false,
				error: {
					type: actions.GET_BY_ID.FAILURE,
					error: action.data,
				},
			}
		default:
			return state
	}
}
