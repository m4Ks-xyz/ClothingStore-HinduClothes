import { Rating } from '../../auth/models/ratings.model';
import { Review } from '../../auth/models/review.model';
import { Category } from '../../auth/models/category.model';
import { NumRatings } from './num-ratings.model';

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
	sizes: {
		name: string;
		quantity: number;
		_id: string;
	}[];

	imageUrl: string;
	ratings?: Rating[];
	reviews?: Review[];
	numRatings?: NumRatings;
	category?: Category;
	level?: number;
	topLevelCategory?: string;
	secondLevelCategory?: string;
	thirdLevelCategory?: string;
}

export interface ProductModelRes {
	details: ProductModel;
	path: { categoryOne: string; categoryThree: string; categoryTwo: string };
}
