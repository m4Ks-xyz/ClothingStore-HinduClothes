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
	productsLoading: boolean;
	homePageLoading: boolean;
	error: string | undefined;
}

export const initialState: ProductsState = {
	products: [],
	totalProducts: undefined,
	homePageProducts: undefined,
	selectedProductById: undefined,
	selectedProductsReviews: undefined,
	selectedProductsRatings: undefined,
	productsLoading: false,
	homePageLoading: false,
	error: undefined,
};

export const ProductsReducer = createReducer(
	initialState,
	on(productsActions.findProductByCategory, (state) => ({
		...state,
		productsLoading: true,
	})),
	on(productsActions.findProductByCategorySuccess, (state, action) => ({
		...state,
		products: action.products.content,
		totalProducts: action.products.totalProducts,
		productsLoading: false,
		error: undefined,
	})),
	on(productsActions.findProductById, (state) => ({
		...state,
		productsLoading: true,
	})),
	on(productsActions.findProductByIdSuccess, (state, action) => ({
		...state,
		selectedProductById: action.product,
		productsLoading: false,
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
	on(productsActions.getHomePageProducts, (state) => ({
		...state,
		homePageLoading: true,
	})),
	on(productsActions.getHomePageProductsSuccess, (state, action) => ({
		...state,
		homePageProducts: action.products,
		homePageLoading: false,
	})),
	on(
		productsActions.findProductByIdFailure,
		productsActions.getProductReviewsFailure,
		productsActions.addProductReviewFailure,
		productsActions.getHomePageProductsFailure,
		productsActions.findProductByCategoryFailure,
		(state, action) => ({
			...state,
			error: action.error,
			productsLoading: false,
			homePageLoading: false,
		}),
	),
);
