import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { OrderRes } from '../../models/order-res.model';
import { Address } from '../../../checkout/models/address.model';

export const orderActions = createActionGroup({
	source: 'Order',
	events: {
		createOrderRequest: props<{ address: Address }>(),
		createOrderRequestSuccess: props<{ order: OrderRes }>(),
		createOrderRequestFailure: props<{ err: string }>(),

		getOrderById: props<{ orderId: string }>(),
		getOrderByIdSuccess: props<{ order: OrderRes }>(),
		getOrderByIdFailure: props<{ err: string }>(),

		getOrderHistoryRequest: emptyProps(),
		getOrderHistoryRequestSuccess: props<{ orders: OrderRes[] }>(),
		getOrderHistoryRequestFailure: props<{ err: string }>(),

		payOrder: props<{ id: string }>(),
		payOrderSuccess: props<{ order: OrderRes }>(),
		payOrderFailure: props<{ err: string }>(),
	},
});
