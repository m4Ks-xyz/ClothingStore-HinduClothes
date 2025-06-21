import { ProductModel } from '../../../models/product.model';
import { createReducer, on } from '@ngrx/store';
import { productsActions } from './products.actions';

export interface ProductsState {
	products: ProductModel[];
	loading: boolean;
	error: string | undefined;
}

export const initialState: ProductsState = {
	products: [],
	loading: false,
	error: undefined,
};

export const ProductsReducer = createReducer(
	initialState,
	on(productsActions.findProductByCategorySuccess, (state, action) => ({
		...state,
		products: action.products.content,
		error: undefined,
		loading: false,
	})),
	on(productsActions.findProductByIdSuccess, (state, action) => ({
		...state,
		products: [action],
	})),
	on(
		productsActions.findProductByIdFailure,
		productsActions.findProductByIdFailure,
		(state, action) => ({
			...state,
			error: action.error,
		}),
	),
);
