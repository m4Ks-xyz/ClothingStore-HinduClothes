import { Product } from './product.model';
import { UserProfileModel } from '../../user/models/user.model';

export interface Review {
	review: String;
	product: Product;
	user: UserProfileModel;
	createdAt: Date;
}
