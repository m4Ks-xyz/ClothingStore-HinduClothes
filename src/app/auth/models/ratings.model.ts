import { UserProfileModel } from '../../user/models/user.model';
import { ProductModel } from '../../products/models/product.model';

export interface Ratings {
	user: UserProfileModel;
	product: ProductModel;
	rating: Number;
	createdAt: Date;
}
