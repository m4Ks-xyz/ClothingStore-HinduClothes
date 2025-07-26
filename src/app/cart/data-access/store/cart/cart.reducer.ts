import { createReducer, on } from '@ngrx/store';
import { Cart } from '../../../models/cart.model';
import { cartActions } from './cart.actions';
import { userActions } from '../../../../user/data-access/store/user.actions';

export interface CartState {
	cart: Cart | undefined;
	cartLoading: boolean;
	errorMsg: string | undefined;
}

export const initialState: CartState = {
	cart: undefined,
	cartLoading: false,
	errorMsg: undefined,
};

export const CartReducer = createReducer(
	initialState,
	on(cartActions.addItemToCart, (state) => ({
		...state,
		cartLoading: true,
	})),
	on(cartActions.addItemToCartSuccess, (state, action) => ({
		...state,
		cartLoading: false,
		cart: { ...state.cart, ...action.cart },
	})),
	on(
		cartActions.addItemToCartFailure,
		cartActions.getCartRequestFailure,
		(state, action) => {
			return { ...state, errorMsg: action.err, cartLoading: false };
		},
	),
	on(cartActions.getCartRequest, (state) => ({ ...state, cartLoading: true })),
	on(cartActions.getCartRequestSuccess, (state, action) => {
		return { ...state, ...action, cartLoading: false };
	}),
	on(cartActions.removeCartItemSuccess, (state, action) => {
		if (state.cart === undefined) {
			return { ...state };
		}

		return {
			...state,
			cart: {
				...state.cart,
				cartItems: state.cart?.cartItems?.filter(
					(item) => item._id !== action.itemId,
				),
			},
		};
	}),
	on(cartActions.removeCartItemFailure, (state, action) => {
		return { ...state, errorMsg: action.err };
	}),
	on(cartActions.updateCartItemSuccess, (state, action) => {
		if (state.cart === undefined) {
			return { ...state };
		}

		return {
			...state,
			cart: {
				...state.cart,
				cartItems:
					state.cart?.cartItems?.map((item) =>
						item._id === action.data._id ? { ...item, ...action.data } : item,
					) ?? [],
			},
		};
	}),
	on(cartActions.updateCartItemFailure, (state, action) => {
		return { ...state, errorMsg: action.err };
	}),
	on(userActions.logout, () => initialState),
);
