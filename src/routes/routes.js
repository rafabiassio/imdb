import pages from '../pages/pages'

const Home = {
	path: '/',
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
