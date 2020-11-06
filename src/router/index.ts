import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		component: () => import('@/views/Home'),
		name: 'Home',
		path: '/',
	},
	{
		component: () => import('@/views/QuoteDetails'),
		name: 'quote',
		path: '/quote/:id',
	},
]

export default new VueRouter({
	routes,
})
