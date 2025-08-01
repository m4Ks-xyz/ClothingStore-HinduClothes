import { Addresses } from '../../auth/models/addresses.model';
import { OrderStatus } from '../types/order-status.type';
import { OrderItems } from './order-items.model';

export interface OrderRes {
	_id: string;
	user: string;
	orderItems: OrderItems[];
	orderDate: string;
	deliveryDate: string;
	shippingAddress: Addresses;
	paymentDetails: { paymentStatus: string; paymentMethod: string };
	totalPrice: number;
	totalDiscountedPrice: number;
	discount: number;
	orderStatus: OrderStatus;
	totalItems: number;
	createdAt: string;
}
