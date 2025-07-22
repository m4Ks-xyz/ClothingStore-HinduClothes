import { Routes } from '@angular/router';
import { orderActions } from '../orders/data-access/store/order.actions';
import { Store } from '@ngrx/store';
import { inject } from '@angular/core';
import { TOKEN_STORAGE_KEY } from '../auth/data-acces/config/api';
import { userActions } from './data-access/store/user.actions';

export const userRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () =>
			import('./components/profile-page/profile-page.component'),
	},
	{
		path: 'orders',
		resolve: {
			loadOrders: () => {
				const store = inject(Store);
				if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
					store.dispatch(orderActions.getOrderHistoryRequest());
				}
				store.dispatch(userActions.skipLoadingUserProfile());

				return true;
			},
		},
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
