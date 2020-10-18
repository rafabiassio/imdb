import * as constants from './constants'

export const getUpcomingRequest = (data) => ({ type: constants.GET_UPCOMING.REQUEST, data })
export const getUpcomingSuccess = (data) => ({ type: constants.GET_UPCOMING.SUCCESS, data })
export const getUpcomingFailure = (data) => ({ type: constants.GET_UPCOMING.FAILURE, data })
