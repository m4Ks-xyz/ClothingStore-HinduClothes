import { Routes } from '@angular/router';
import { provideOrdersState } from '../orders/data-access/provide-orders-state';

export const userRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () =>
			import('./components/profile-page/profile-page.component'),
	},
	{
		path: 'orders',
		providers: [provideOrdersState()],
		children: [
			{
				path: '',
				loadComponent: () =>
					import('../orders/components/orders/orders.component'),
			},
			{
				path: ':id',
				loadComponent: () =>
					import('../orders/components/order-details/order-details.component'),
			},
		],
	},
];
