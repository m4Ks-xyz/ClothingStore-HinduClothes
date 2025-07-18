export const RATE_PRODUCT_DIALOG_RATINGS: RateProductDialogRatings[] = [
	{
		id: 1,
		name: 'Poor',
	},
	{
		id: 2,
		name: 'Average',
	},
	{
		id: 3,
		name: 'Good',
	},
	{
		id: 4,
		name: 'Very Good',
	},
	{
		id: 5,
		name: 'Excellent',
	},
];

export interface RateProductDialogRatings {
	id: 1 | 2 | 3 | 4 | 5;
	name: string;
}
