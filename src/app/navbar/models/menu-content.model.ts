export interface MenuItem {
	name: string;
	id: string;
}

export interface MenuSection {
	id: string;
	name: string;
	items: MenuItem[];
}

export interface FeaturedItem {
	src: string;
	title: string;
	name: string;
	_id: string;
}

export interface MenuCategory {
	id: string;
	name: string;
	featured: FeaturedItem[];
	sections: MenuSection[];
}
