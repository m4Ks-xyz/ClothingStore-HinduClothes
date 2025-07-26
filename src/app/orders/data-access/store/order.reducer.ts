import { createReducer, on } from '@ngrx/store';
import { OrderRes } from '../../models/order-res.model';
import { orderActions } from './order.actions';
import { userActions } from '../../../user/data-access/store/user.actions';

export interface OrderState {
	order: OrderRes | undefined;
	ordersHistory: OrderRes[] | undefined;
	orderLoading: boolean;
	error: string | undefined;
}

export const initialState: OrderState = {
	order: undefined,
	ordersHistory: undefined,
	orderLoading: false,
	error: undefined,
};

export const OrderReducer = createReducer(
	initialState,
	on(orderActions.createOrderRequest, (state) => ({
		...state,
		orderLoading: true,
	})),
	on(orderActions.createOrderRequestSuccess, (state, action) => {
		return {
			...state,
			order: { ...action.order },
			ordersHistory: [...(state.ordersHistory ?? []), action.order],
			orderLoading: false,
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
				orderLoading: false,
			};
		},
	),
	on(orderActions.getOrderById, (state) => ({
		...state,
		orderLoading: true,
	})),
	on(orderActions.getOrderByIdSuccess, (state, action) => {
		return {
			...state,
			order: action.order,
			orderLoading: false,
		};
	}),
	on(orderActions.getOrderHistoryRequest, (state) => ({
		...state,
		orderLoading: true,
	})),
	on(orderActions.getOrderHistoryRequestSuccess, (state, action) => {
		return {
			...state,
			ordersHistory: action.orders,
			orderLoading: false,
		};
	}),
	on(orderActions.payOrder, (state) => ({
		...state,
		orderLoading: true,
	})),
	on(orderActions.payOrderSuccess, (state, action) => {
		return {
			...state,
			order: action.order,
			orderLoading: false,
		};
	}),
	on(userActions.logout, () => initialState),
);
