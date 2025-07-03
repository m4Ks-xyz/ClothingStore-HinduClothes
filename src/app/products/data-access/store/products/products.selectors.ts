import { createFeature, createSelector } from '@ngrx/store';
import { ProductsReducer } from './products.reducer';

export const ProductsFeature = createFeature({
	name: 'products',
	reducer: ProductsReducer,
});

export const { selectProducts, selectProductsState, selectTotalProducts } =
	ProductsFeature;

export const selectedProduct = createSelector(
	[selectProductsState],
	(product) => {
		return product.selectedProductById;
	},
);
