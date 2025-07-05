import { createFeature, createSelector } from '@ngrx/store';
import { OrderReducer } from './order.reducer';

export const orderFeature = createFeature({
	name: 'order',
	reducer: OrderReducer,
});

export const { selectOrder, selectOrdersHistory } = orderFeature;

export const selectOrderShippingAddress = createSelector(
	[selectOrder],
	(order) => {
		return order?.shippingAddress;
	},
);
