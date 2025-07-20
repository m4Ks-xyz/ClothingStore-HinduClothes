import { BaseProduct } from '../../products/models/base-product.model';

export interface CartItem {
	_id: string;
	cart: string;
	product: BaseProduct;
	size: string;
	quantity: number;
	price: number;
	discountedPrice: number;
	userId: string;
}
