import { ProductModel } from './product.model';

export interface ProductsSearchResponseModel {
	content: ProductModel[];
	totalProducts: number;
}
