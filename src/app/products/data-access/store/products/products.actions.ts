import { createActionGroup, props } from '@ngrx/store';
import { ProductParams } from '../../services/product-api.service';
import { ProductsSearchResponse } from '../../../models/products-search.response';
import { ProductModel } from '../../../models/product.model';

export const productsActions = createActionGroup({
	source: 'Products',
	events: {
		findProductByCategory: props<{ params: ProductParams }>(),
		findProductByCategorySuccess: props<{
			products: ProductsSearchResponse;
		}>(),
		findProductByCategoryFailure: props<{ error: Error }>(),

		findProductById: props<{ _id: string }>(),
		findProductByIdSuccess: props<{ product: ProductModel }>(),
		findProductByIdFailure: props<{ error: string }>(),
	},
});
