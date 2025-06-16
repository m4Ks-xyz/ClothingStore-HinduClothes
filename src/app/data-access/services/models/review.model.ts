import { Product } from './product.model';
import { User } from './user.model';

export interface Review {
	review: String;
	product: Product;
	user: User;
	createdAt: Date;
}
