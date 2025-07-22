import { ProductWrapper } from '../../products/types/product-wrapper.model';

export interface CartItem extends ProductWrapper {
	_id: string;
	cart: string;
}
