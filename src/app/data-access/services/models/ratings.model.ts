import { User } from './user.model';
import { Product } from './product.model';

export interface Ratings {
	user: User;
	product: Product;
	rating: Number;
	createdAt: Date;
}
