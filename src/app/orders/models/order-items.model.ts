import { BaseProduct } from '../../products/models/base-product.model';

export interface OrderItems {
	product: BaseProduct;
	size: string;
	quantity: number;
	price: number;
	discountedPrice: number;
	userId: string;
	deliveryDate: string;
}
