import { MenuCategory } from '../models/menu-content-model';

export const MENU_CONTENT: MenuCategory[] = [
	{
		id: 'women',
		name: 'Women',
		featured: [
			{
				src: 'https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/n/u/v/free-sleeveless-new-designer-embroidred-sequins-heavy-work-original-imaggbwhhhnmhxxd.jpeg?q=70',
				title: 'New Arrival',
				name: 'Embroidered Semi Stitched Lehenga Choli',
				routerLink: '/',
			},
			{
				src: 'https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/g/x/s/free-full-sleeve-purple-lehenga-ishu-fab-original-imagnzgvgeq85gt8.jpeg?q=70',
				title: 'Best seller',
				name: 'Embroidered Semi Stitched Lehenga Choli',
				routerLink: '/',
			},
		],
		sections: [
			{
				id: 'clothing',
				name: 'Clothing',
				items: [
					{ name: 'Tops', id: 'tops' },
					{ name: 'Dresses', id: 'dresses' },
					{ name: 'Pants', id: 'pants' },
					{ name: 'Lengha Choli', id: 'lengha_choli' },
					{ name: 'Sweaters', id: 'sweaters' },
					{ name: 'T-Shirts', id: 'tshirts' },
					{ name: 'Jackets', id: 'jackets' },
					{ name: 'Gowns', id: 'gowns' },
					{ name: 'Sarees', id: 'sarees' },
					{ name: 'Kurtas', id: 'kurtas' },
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
				name: 'Men Printed Cotton Blend Straight Kurta',
				routerLink: '/',
			},
			{
				src: 'https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70',
				title: 'Best seller',
				name: 'Men Woven Design Pure Cotton Straight Kurta',
				routerLink: '/',
			},
		],
		sections: [
			{
				id: 'clothing',
				name: 'Clothing',
				items: [
					{ name: 'Kurtas', id: 'mens_kurtas' },
					{ name: 'Shirt', id: 'shirt' },
					{ name: 'Pants', id: 'pants' },
					{ name: 'Sweaters', id: 'sweaters' },
					{ name: 'T-Shirts', id: 't_shirts' },
					{ name: 'Jackets', id: 'jackets' },
					{ name: 'Activewear', id: 'activewear' },
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
