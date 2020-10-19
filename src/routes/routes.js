import pages from '../pages/pages'
import { HOME } from './paths'

const Home = {
	path: `${HOME.url}:page`,
	component: pages.Home,
	exact: true
}

const PageNotFound = {
	path: '*',
	component: pages.Home,
	exact: false
}

export default [
	Home,
	PageNotFound
]
