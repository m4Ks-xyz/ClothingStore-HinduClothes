export interface MenJeans {
	imageUrl: string;
	brand: string;
	title: string;
	color: string;
	price: number;
	discountPercent: number;
	size: {
		name: string;
		quantity: number;
	}[];
	quantity: number;
	topLevelCategory: string;
	secondLevelCategory: string;
	thirdLevelCategory: string;
	description: string;
}
