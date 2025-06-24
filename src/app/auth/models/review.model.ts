import { ProductModel } from '../../products/models/product.model';
import { UserProfileModel } from '../../user/models/user.model';

export interface Review {
	review: string;
	product: ProductModel;
	user: UserProfileModel;
	createdAt: Date;
}
