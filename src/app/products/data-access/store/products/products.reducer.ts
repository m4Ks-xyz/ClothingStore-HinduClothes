import { ProductModel, ProductModelRes } from '../../../models/product.model';
import { createReducer, on } from '@ngrx/store';
import { productsActions } from './products.actions';

export interface ProductsState {
	products: ProductModel[];
	totalProducts: number | undefined;
	selectedProductById: ProductModelRes | undefined;
	loading: boolean;
	error: string | undefined;
}

export const initialState: ProductsState = {
	products: [],
	totalProducts: undefined,
	selectedProductById: undefined,
	loading: false,
	error: undefined,
};

export const ProductsReducer = createReducer(
	initialState,
	on(productsActions.findProductByCategorySuccess, (state, action) => ({
		...state,
		products: action.products.content,
		totalProducts: action.products.totalProducts,
		error: undefined,
		loading: false,
	})),
	on(productsActions.findProductByIdSuccess, (state, action) => ({
		...state,
		selectedProductById: action.product,
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
