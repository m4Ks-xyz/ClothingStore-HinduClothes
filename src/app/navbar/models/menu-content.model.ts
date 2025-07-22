import { ProductModel } from '../../products/models/product.model';

export interface MenuItem {
	name: string;
	id: string;
}

export interface MenuSection {
	id: string;
	name: string;
	items: MenuItem[];
}

export interface MenuCategory {
	id: string;
	name: string;
	featured: ProductModel[];
	sections: MenuSection[];
}
