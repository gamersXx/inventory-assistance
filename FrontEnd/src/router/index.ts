import { createRouter, createWebHistory } from 'vue-router';
import sideMenu from '@/stores/sideMenu.json';

const routes = [
	{
		path: '/',
		component: () => import('../layouts/MainLayout.vue'),
		meta: {
			menu: sideMenu,
			requiresAuth: false,
		},
		children: [
			{
				path: '',
				component: () => import('../views/dashboardPage.vue'),
				name: 'dashboard',
			},
		],
	},
	// 404 Pagina no encontrada
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	component: () => import('../views/errors/NotFoundPage.vue'),
	// 	name: 'notFoundPage',
	// },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// router.beforeEach((to) => {
// 	// chequear si la ruta requiere autenticación y el usuario no está autenticado
// 	const authStore = useAuthStore();
// 	console.log(authStore.isAuthenticated);
// 	if (to.meta.requiresAuth && !authStore.isAuthenticated) {
// 		return { name: 'loginPage', query: { return: btoa(to.fullPath) } };
// 	}
// 	// Si el usuario está autenticado y trata de acceder a la página de login, redirigirlo a la página de módulos
// 	if (to.name === 'loginPage' && authStore.isAuthenticated) {
// 		return { name: 'modulesPage' };
// 	}
// });

export default router;
