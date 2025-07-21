import { BaseProduct } from '../models/base-product.model';

export interface ProductWrapper {
	_id: string;
	product: BaseProduct;
	size: string;
	quantity: number;
	price: number;
	discountedPrice: number;
	userId: string;
}
