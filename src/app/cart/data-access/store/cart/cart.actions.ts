import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AddItemToCartReq } from '../../../models/add-item-to-cart-req.model';
import { Cart } from '../../../models/cart.model';
import { CartItem } from '../../../models/cart-item.model';

export const cartActions = createActionGroup({
	source: 'Cart',
	events: {
		addItemToCart: props<{ data: AddItemToCartReq }>(),
		addItemToCartSuccess: props<{ cart: Cart }>(),
		addItemToCartFailure: props<{ err: string }>(),

		getCartRequest: emptyProps(),
		getCartRequestSuccess: props<{ cart: Cart }>(),
		getCartRequestFailure: props<{ err: string }>(),

		removeCartItem: props<{ id: string }>(),
		removeCartItemSuccess: props<{ itemId: string }>(),
		removeCartItemFailure: props<{ err: string }>(),

		updateCartItem: props<{ id: string; quantity: number }>(),
		updateCartItemSuccess: props<{ data: CartItem }>(),
		updateCartItemFailure: props<{ err: string }>(),

		resetCart: emptyProps(),
	},
});
