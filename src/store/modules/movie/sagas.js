import { call, put, takeLatest, all, select } from 'redux-saga/effects'
import { api } from '../../../config/axios'
import * as constants from './constants'

import { API_KEY } from '../../../constants'
import {
	getUpcomingSuccess,
	getUpcomingFailure,
	getImageSizesSuccess,
	getImageSizesFailure,
	getByIdSuccess,
	getByIdFailure
} from './actions'

const MODULE = 'movie'
const ERROR = {
	LIST: `Error at list ${MODULE}s`,
	GET: `Error at find ${MODULE}`,
}

const getImageSizesState = (state) => state.imageSizes

function* getUpcoming({ data }) {
	try {
		const params = {
			api_key: API_KEY
		}
		const page = +data?.page || 1
		const imageSizesState = yield select(getImageSizesState)

		if (!imageSizesState?.images) {
			const [movies, imageSizes] = yield all([
				call(api.get, '/movie/upcoming', {
					params: {
						...params,
						page
					}
				}),
				call(api.get, '/configuration', { params })
			])
			yield put(getUpcomingSuccess(movies.data))
			yield put(getImageSizesSuccess(imageSizes.data))
		} else {
			const { data: response } = yield call(api.get, '/movie/upcoming', {
				params: {
					...params,
					page
				}
			})
			yield put(getUpcomingSuccess(response))
		}
	} catch (error) {
		console.error(ERROR.LIST)
		yield put(getUpcomingFailure(error))
	}
}

function* getById({ data }) {
	try {
		const { id } = data
		const params = {
			api_key: API_KEY
		}
		const imageSizesState = yield select(getImageSizesState)

		if (!imageSizesState?.images) {
			const [movie, imageSizes] = yield all([
				call(api.get, `/movie/${id}`, { params }),
				call(api.get, '/configuration', { params })
			])
			yield put(getByIdSuccess(movie.data))
			yield put(getImageSizesSuccess(imageSizes.data))
		} else {
			const { data: response } = yield call(api.get, `/movie/${id}`, { params })
			yield put(getByIdSuccess(response))
		}
	} catch (error) {
		console.error(ERROR.GET)
		yield put(getByIdFailure(error))
	}
}

export default all([
	takeLatest(constants.GET_UPCOMING.REQUEST, getUpcoming),
	takeLatest(constants.GET_BY_ID.REQUEST, getById),
])
