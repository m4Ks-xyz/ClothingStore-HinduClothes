export interface BaseProduct {
	_id: string;
	imageUrl: string;
	brand: string;
	title: string;
	price: number;
	discount: number;
	color?: string;
	size?: {
		name: string;
		quantity: number;
	}[];
	quantity?: number;
	topLevelCategory?: string;
	secondLevelCategory?: string;
	thirdLevelCategory?: string;
	description?: string;
}
