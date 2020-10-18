import * as actions from './constants'

const initialState = {
	loading: false,
	content: null,
	movies: [],
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
				movies: action.data,
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
		default:
			return state
	}
}
