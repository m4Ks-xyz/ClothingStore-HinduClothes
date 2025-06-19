import { UserProfileModel } from '../../user/models/user.model';
import { Product } from './product.model';

export interface Ratings {
	user: UserProfileModel;
	product: Product;
	rating: Number;
	createdAt: Date;
}
