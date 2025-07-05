import { Addresses } from '../../auth/models/addresses.model';
import { OrderStatus } from '../types/order-status.type';
import { OrderItems } from './order-items.model';

export interface OrderRes {
	user: string;
	orderItems: OrderItems[];
	orderDate: string;
	deliveryDate: string;
	shippingAddress: Addresses;
	paymentDetails: any;
	totalPrice: number;
	totalDiscountedPrice: number;
	discount: number;
	orderStatus: OrderStatus;
	totalItems: number;
	createdAt: string;
}
