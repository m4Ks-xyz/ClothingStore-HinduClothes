import { Ratings } from './ratings.model';
import { Review } from './review.model';
import { Category } from './category.model';

export interface Product {
	title: String;
	description: String;
	price: Number;
	discountedPrice: Number;
	discount: Number;
	quantity: Number;
	brand: String;
	color: String;
	sizes: [
		{
			name: String;
			quantity: String;
		},
	];
	imageUrl: String;
	ratings: Ratings[];
	reviews: Review[];
	numRatings: Number;
	category: Category;
	level: Number;
	topLevelCategory: String;
	secondLevelCategory: String;
	thirdLevelCategory: String;
}
