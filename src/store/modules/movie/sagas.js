import { call, put, takeLatest, all } from 'redux-saga/effects'
import * as constants from './constants'

import {
	getUpcomingSuccess,
	getUpcomingFailure
} from './actions'

const MODULE = 'movie'
const ERROR = {
	LIST: `Error at list ${MODULE}s`,
	GET: `Error at find ${MODULE}`,
}


export default all([])
