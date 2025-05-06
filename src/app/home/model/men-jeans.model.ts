export interface MenJeans {
	imageUrl: string;
	brand: string;
	title: string;
	color: string;
	discountedPrice: number;
	price: number;
	discountProcent?: number;
	size: {
		name: string;
		quantity: number;
	}[];

	quantity: number;
	topLevelCategory?: 'Men';
	secondLevelCategory?: 'Clothing';
	thirdLevelCategory?: 'men_jeans';
	description: string;
}
