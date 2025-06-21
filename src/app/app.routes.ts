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
		path: 'products/:categoryId',
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
		path: 'payment-success',
		loadComponent: () =>
			import('./checkout/components/payment-success/payment-success.component'),
	},
	{
		path: 'account/orders',
		loadComponent: () => import('./orders/components/orders/orders.component'),
	},
	{
		path: 'order/:id',
		loadComponent: () =>
			import('./orders/components/order-details/order-details.component'),
	},
];
