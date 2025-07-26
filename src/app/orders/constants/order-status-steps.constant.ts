import { OrderStatusStep } from '../models/order-status-steps.model';

export const FILTER_STEPS: OrderStatusStep[] = [
	{
		id: 0,
		title: 'placed',
		message:
			'The order has been submitted by the customer but not yet paid or processed.',
	},
	{
		id: 1,
		title: 'confirmed',
		message: 'Payment has been successfully received and confirmed.',
	},
	{
		id: 2,
		title: 'preparing',
		message: 'The seller is getting the order ready — packing.',
	},
	{
		id: 3,
		title: 'sent',
		message:
			'The order has left the warehouse/store and is on its way to the customer.',
	},
	{
		id: 4,
		title: 'delivered',
		message:
			'The order has arrived at the customer’s address and delivery is confirmed.',
	},
];
