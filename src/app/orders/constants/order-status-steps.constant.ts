import { OrderStatusStep } from '../models/order-status-steps.model';

export const FILTER_STEPS: OrderStatusStep[] = [
	{
		id: 0,
		title: 'PLACED',
	},
	{
		id: 1,
		title: 'CONFIRMED',
	},
	{
		id: 2,
		title: 'PREPARING',
	},
	{
		id: 3,
		title: 'SENT',
	},
	{
		id: 4,
		title: 'DELIVERED',
	},
];
