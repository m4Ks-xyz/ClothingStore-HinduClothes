import { createFeature } from '@ngrx/store';
import { ProductsReducer } from './products.reducer';

export const ProductsFeature = createFeature({
	name: 'products',
	reducer: ProductsReducer,
});

export const {
	selectProducts,
	selectSelectedProductById,
	selectTotalProducts,
} = ProductsFeature;
