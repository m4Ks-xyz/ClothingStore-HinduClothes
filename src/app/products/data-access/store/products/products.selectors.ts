import { createFeature } from '@ngrx/store';
import { ProductsReducer } from './products.reducer';

export const productsFeature = createFeature({
	name: 'products',
	reducer: ProductsReducer,
});

export const {
	selectProducts,
	selectSelectedProductById,
	selectTotalProducts,
	selectSelectedProductsReviews,
	selectSelectedProductsRatings,
	selectHomePageProducts,
} = productsFeature;
