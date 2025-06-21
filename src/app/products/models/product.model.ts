import { Ratings } from '../../auth/models/ratings.model';
import { Review } from '../../auth/models/review.model';
import { Category } from '../../auth/models/category.model';

export interface ProductModel {
	_id: string;
	title: string;
	description: string;
	price: number;
	discountedPrice?: number;
	discount: number;
	quantity: number;
	brand: string;
	color: string;
	sizes?: [
		{
			name: string;
			quantity: number;
		},
	];
	imageUrl: string;
	ratings?: Ratings[];
	reviews?: Review[];
	numRatings?: number;
	category?: Category;
	level?: number;
	topLevelCategory?: string;
	secondLevelCategory?: string;
	thirdLevelCategory?: string;
}
