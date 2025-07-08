import { OrderStatusStep } from '../models/order-status-steps.model';

export const FILTER_STEPS: OrderStatusStep[] = [
	{
		id: 0,
		title: 'placed',
	},
	{
		id: 1,
		title: 'confirmed',
	},
	{
		id: 2,
		title: 'preparing',
	},
	{
		id: 3,
		title: 'sent',
	},
	{
		id: 4,
		title: 'delivered',
	},
];
