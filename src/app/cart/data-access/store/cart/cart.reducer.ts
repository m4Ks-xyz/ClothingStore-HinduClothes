import { createReducer, on } from '@ngrx/store';
import { Cart } from '../../../models/cart.model';
import { cartActions } from './cart.actions';

export interface CartState {
	cart: Cart | undefined;
	errorMsg: string | undefined;
}

export const initialState: CartState = {
	cart: undefined,
	errorMsg: undefined,
};

export const CartReducer = createReducer(
	initialState,
	on(cartActions.addItemToCartSuccess, (state, action) => ({
		...state,
		cart: { ...state.cart, ...action.cart },
	})),
	on(cartActions.addItemToCartFailure, (state, action) => {
		return { ...state, errorMsg: action.err };
	}),
	on(cartActions.getCartRequestSuccess, (state, action) => {
		return { ...state, ...action };
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
	on(cartActions.resetCart, () => initialState),
);
