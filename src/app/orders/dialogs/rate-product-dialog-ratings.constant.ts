export const RATE_PRODUCT_DIALOG_RATINGS: RateProductDialogRatings[] = [
	{
		id: 'poor',
		name: 'Poor',
	},
	{
		id: 'average',
		name: 'Average',
	},
	{
		id: 'good',
		name: 'Good',
	},
	{
		id: 'very Good',
		name: 'Very Good',
	},
	{
		id: 'excellent',
		name: 'Excellent',
	},
];

export interface RateProductDialogRatings {
	id: string;
	name: string;
}
