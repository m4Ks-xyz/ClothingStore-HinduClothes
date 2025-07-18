export interface NumRatings {
	'1': number;
	'2': number;
	'3': number;
	'4': number;
	'5': number;
}

export interface RatingCategory {
	id: keyof NumRatings;
	name: string;
}
