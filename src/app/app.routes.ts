import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'admin',
		loadChildren: () => import('./admin/modules/admin/admin-routing.module'),
	},
	{
		path: '',
		loadComponent: () => import('./home/components/home/home.component'),
	},
	{
		path: 'products/:levelOne/:levelTwo/:levelThree',
		loadComponent: () =>
			import('./products/components/products/products.component'),
	},
	{
		path: 'cart',
		loadComponent: () => import('./cart/components/cart/cart.component'),
	},
	{
		path: 'products/id/:id',
		loadComponent: () =>
			import('./products/components/product-details/product-details.component'),
	},
	{
		path: 'checkout',
		loadComponent: () =>
			import('./checkout/components/checkout/checkout.component'),
	},
	{
		path: 'checkout/payment/:id',
		loadComponent: () =>
			import('./checkout/components/payment/payment.component'),
	},
	{
		path: 'account',
		loadChildren: () => import('./user/user.routes').then((m) => m.userRoutes),
	},
	{
		path: '**',
		loadComponent: () => import('./not-found/not-found.component'),
	},
];
