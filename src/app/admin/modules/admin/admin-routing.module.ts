import { Routes } from '@angular/router';

const adminRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('../../components/admin/admin.component'),
		children: [
			{
				path: '',
				loadComponent: () =>
					import('../../components/dashboard/dashboard.component'),
			},
			{
				path: 'products',
				loadComponent: () =>
					import('../../components/admin-products/admin-products.component'),
			},
			{
				path: 'orders',
				loadComponent: () =>
					import('../../components/admin-orders/admin-orders.component'),
			},
			{
				path: 'new-product',
				loadComponent: () =>
					import('../../components/new-product/new-product.component'),
			},
		],
	},
];

export default adminRoutes;
