import { call, put, takeLatest, all, select } from 'redux-saga/effects'
import { api } from '../../../config/axios'
import * as constants from './constants'

import { API_KEY } from '../../../constants'
import {
	getUpcomingSuccess,
	getUpcomingFailure,
	getImageSizesSuccess,
	getImageSizesFailure
} from './actions'

const MODULE = 'movie'
const ERROR = {
	LIST: `Error at list ${MODULE}s`,
	GET: `Error at find ${MODULE}`,
}

const getImageSizesState = (state) => state.imageSizes

function* getUpcoming({ data }) {
	try {
		const commonParams = {
			params: {
				api_key: API_KEY
			}
		}
		const page = +data?.page || 1
		const imageSizesState = yield select(getImageSizesState)

		if (!imageSizesState?.images) {
			const [movies, imageSizes] = yield all([
				call(api.get, '/movie/upcoming', {
					params: {
						...commonParams.params,
						page
					}
				}),
				yield call(api.get, '/configuration', commonParams)
			])
			yield put(getUpcomingSuccess(movies.data))
			yield put(getImageSizesSuccess(imageSizes.data))
		} else {
			const { data: response } = yield call(api.get, '/movie/upcoming', {
				params: {
					...commonParams.params,
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

export default all([
	takeLatest(constants.GET_UPCOMING.REQUEST, getUpcoming),
])
