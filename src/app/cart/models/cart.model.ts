import { CartItem } from './cart-item.model';

export interface Cart {
	_id: string;
	user: string;
	cartItems: CartItem[];
	totalPrice: number;
	totalItem: number;
	totalDiscountedPrice: number;
	discount: number;
}
