export interface CartItem {
	_id: string;
	cart: string;
	product: {
		_id: string;
		title: string;
		description: string;
		price: number;
		discountedPrice: number;
		discount: number;
		quantity: number;
		brand: string;
		color: string;
		sizes: [
			{
				name: string;
				quantity: number;
				_id: string;
			},
		];
		imageUrl: string;
		ratings: [];
		reviews: [];
		numRatings: number;
		category: string;
		level: number;
	};
	size: string;
	quantity: number;
	price: number;
	discountedPrice: number;
	userId: string;
}
