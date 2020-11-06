import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		component: () => import('@/views/Home'),
		name: 'Home',
		path: '/',
		children: [
			{
				component: () => import('@/views/QuoteDetails'),
				name: 'QuoteDetails',
				path: ':id',
			},
		],
	},
]

export default new VueRouter({
	routes,
})
