import { createFeature, createSelector } from '@ngrx/store';
import { CartReducer } from './cart.reducer';

export const cartFeature = createFeature({
	name: 'cart',
	reducer: CartReducer,
});

export const { selectCart, selectCartLoading } = cartFeature;

export const selectTotalCartItems = createSelector([selectCart], (cart) => {
	return cart?.totalItem;
});
