import { ProductModel, ProductModelRes } from '../../../models/product.model';
import { createReducer, on } from '@ngrx/store';
import { productsActions } from './products.actions';
import { Review } from '../../../../auth/models/review.model';
import { Rating } from '../../../../auth/models/ratings.model';
import { HomeFeaturedItems } from '../../../models/home-featured-items.model';

export interface ProductsState {
	products: ProductModel[];
	totalProducts: number | undefined;
	homePageProducts: HomeFeaturedItems[] | undefined;
	selectedProductById: ProductModelRes | undefined;
	selectedProductsReviews: Review[] | undefined;
	selectedProductsRatings: Rating[] | undefined;
	error: string | undefined;
}

export const initialState: ProductsState = {
	products: [],
	totalProducts: undefined,
	homePageProducts: undefined,
	selectedProductById: undefined,
	selectedProductsReviews: undefined,
	selectedProductsRatings: undefined,
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
	on(productsActions.getProductReviewsSuccess, (state, action) => ({
		...state,
		selectedProductsReviews: action.review,
		selectedProductsRatings: action.rating,
	})),
	on(productsActions.addProductReviewSuccess, (state, action) => ({
		...state,
		selectedProductsReviews: action.review,
		selectedProductsRatings: action.rating,
	})),
	on(productsActions.getHomePageProductsSuccess, (state, action) => ({
		...state,
		homePageProducts: action.products,
	})),
	on(
		productsActions.findProductByIdFailure,
		productsActions.findProductByIdFailure,
		productsActions.getProductReviewsFailure,
		productsActions.addProductReviewFailure,
		productsActions.getHomePageProductsFailure,
		(state, action) => ({
			...state,
			error: action.error,
		}),
	),
);
