import * as constants from './constants'

export const getUpcomingRequest = (data) => ({ type: constants.GET_UPCOMING.REQUEST, data })
export const getUpcomingSuccess = (data) => ({ type: constants.GET_UPCOMING.SUCCESS, data })
export const getUpcomingFailure = (data) => ({ type: constants.GET_UPCOMING.FAILURE, data })

export const getImageSizesSuccess = (data) => ({ type: constants.GET_IMAGE_SIZES.SUCCESS, data })
export const getImageSizesFailure = (data) => ({ type: constants.GET_IMAGE_SIZES.FAILURE, data })
