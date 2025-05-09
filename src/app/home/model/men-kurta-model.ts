export interface MenKurta {
	imageUrl: string;
	brand: string;
	title: string;
	color: string;

	price: number;
	discountProcent: number;
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
