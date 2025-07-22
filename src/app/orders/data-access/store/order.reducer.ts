import { createReducer, on } from '@ngrx/store';
import { OrderRes } from '../../models/order-res.model';
import { orderActions } from './order.actions';
import { userActions } from '../../../user/data-access/store/user.actions';

export interface OrderState {
	order: OrderRes | undefined;
	ordersHistory: OrderRes[] | undefined;
	error: string | undefined;
}

export const initialState: OrderState = {
	order: undefined,
	ordersHistory: undefined,
	error: undefined,
};

export const OrderReducer = createReducer(
	initialState,
	on(orderActions.createOrderRequestSuccess, (state, action) => {
		return {
			...state,
			order: { ...action.order },
			ordersHistory: [...(state.ordersHistory ?? []), action.order],
		};
	}),
	on(
		orderActions.createOrderRequestFailure,
		orderActions.getOrderByIdFailure,
		orderActions.getOrderHistoryRequestFailure,
		orderActions.payOrderFailure,
		(state, action) => {
			return {
				...state,
				error: action.err,
			};
		},
	),
	on(orderActions.getOrderByIdSuccess, (state, action) => {
		return {
			...state,
			order: action.order,
		};
	}),
	on(orderActions.getOrderHistoryRequestSuccess, (state, action) => {
		return {
			...state,
			ordersHistory: action.orders,
		};
	}),
	on(orderActions.payOrderSuccess, (state, action) => {
		return {
			...state,
			order: action.order,
		};
	}),
	on(userActions.logout, () => initialState),
);
