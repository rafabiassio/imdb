import { lazy } from 'react'

const Home = lazy(() => import('./Home'))
const MovieDetail = lazy(() => import('./MovieDetail'))

export default {
	Home,
	MovieDetail
}
