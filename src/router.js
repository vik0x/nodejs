import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: '/main',
			component: () => import('@/views/Layout'),
			children: [
				{
					path: '/main',
					name: 'main',
					component: () => import('./views/index'),
				},
			],
		},
	],
});
