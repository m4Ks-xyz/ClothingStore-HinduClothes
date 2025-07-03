import { MenuCategory } from '../models/menu-content.model';

export const MENU_CONTENT: MenuCategory[] = [
	{
		id: 'women',
		name: 'Women',
		featured: [
			{
				src: 'https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/n/u/v/free-sleeveless-new-designer-embroidred-sequins-heavy-work-original-imaggbwhhhnmhxxd.jpeg?q=70',
				title: 'New Arrival',
				name: 'Embroidered Semi Stitched Lehenga Choli',
				_id: '685ad245889250097a0e969c',
			},
			{
				src: 'https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/g/x/s/free-full-sleeve-purple-lehenga-ishu-fab-original-imagnzgvgeq85gt8.jpeg?q=70',
				title: 'Best seller',
				name: 'Embroidered Semi Stitched Lehenga Choli',
				_id: '685ad246889250097a0e96ce',
			},
		],
		sections: [
			{
				id: 'clothing',
				name: 'Clothing',
				items: [
					{ name: 'Tops', id: 'top' },
					{ name: 'Dresses', id: 'dress' },
					{ name: 'Lengha Choli', id: 'lengha-choli' },
					{ name: 'Gouns', id: 'gouns' },
					{ name: 'Sarees', id: 'saree' },
					{ name: 'Kurtas', id: 'kurta' },
					{ name: 'Jeans', id: 'jeans' },
				],
			},
			{
				id: 'accessories',
				name: 'Accessories',
				items: [
					{ name: 'Watches', id: 'watches' },
					{ name: 'Wallets', id: 'wallets' },
					{ name: 'Bags', id: 'bags' },
					{ name: 'Sunglasses', id: 'sunglasses' },
					{ name: 'Hats', id: 'hats' },
					{ name: 'Belts', id: 'belts' },
				],
			},
			{
				id: 'brands',
				name: 'Brands',
				items: [
					{ name: 'Full Nelson', id: 'full_nelson' },
					{ name: 'My Way', id: 'my_way' },
					{ name: 'Re-Arranged', id: 're_arranged' },
					{ name: 'Counterfeit', id: 'counterfeit' },
					{ name: 'Significant Other', id: 'significant_other' },
				],
			},
		],
	},

	{
		id: 'men',
		name: 'Men',
		featured: [
			{
				src: 'https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70',
				title: 'New Arrival',
				name: 'Embroidered Semi Stitched Lehenga Choli',
				_id: '685adcc5889250097a0e9bb0',
			},
			{
				src: 'https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70',
				title: 'Best seller',
				name: 'Embroidered Semi Stitched Lehenga Choli',
				_id: '685adcc5889250097a0e9bba',
			},
		],
		sections: [
			{
				id: 'clothing',
				name: 'Clothing',
				items: [
					{ name: 'Kurtas', id: 'kurta' },
					{ name: 'Pants', id: 'jeans' },
					{ name: 'Shirt', id: 'shirt' },
				],
			},
			{
				id: 'accessories',
				name: 'Accessories',
				items: [
					{ name: 'Watches', id: 'watches' },
					{ name: 'Wallets', id: 'wallets' },
					{ name: 'Bags', id: 'bags' },
					{ name: 'Sunglasses', id: 'sunglasses' },
					{ name: 'Hats', id: 'hats' },
					{ name: 'Belts', id: 'belts' },
				],
			},
			{
				id: 'brands',
				name: 'Brands',
				items: [
					{ name: 'Re-Arranged', id: 're_arranged' },
					{ name: 'Counterfeit', id: 'counterfeit' },
					{ name: 'Full Nelson', id: 'full_nelson' },
					{ name: 'My Way', id: 'my_way' },
				],
			},
		],
	},
];
