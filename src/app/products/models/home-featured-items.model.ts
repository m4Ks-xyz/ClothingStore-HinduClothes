import { ProductModel } from './product.model';

export interface HomeFeaturedItems {
	id: string;
	name: string;
	items: ProductModel[];
}
