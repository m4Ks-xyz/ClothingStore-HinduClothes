import { ProductWrapper } from '../../products/types/product-wrapper.model';

export interface OrderItems extends ProductWrapper {
	deliveryDate: string;
}
