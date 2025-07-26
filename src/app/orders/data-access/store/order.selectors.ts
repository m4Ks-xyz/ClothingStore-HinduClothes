import { createFeature } from '@ngrx/store';
import { OrderReducer } from './order.reducer';

export const orderFeature = createFeature({
	name: 'order',
	reducer: OrderReducer,
});

export const { selectOrder, selectOrdersHistory, selectOrderLoading } =
	orderFeature;
