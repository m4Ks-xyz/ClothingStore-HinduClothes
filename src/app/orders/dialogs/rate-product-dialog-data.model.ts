export interface RateProductDialogData {
	message: string;
	rating: Rating;
}

export type Rating = 'Poor' | 'Average' | 'Good' | 'Very Good' | 'Excellent';
