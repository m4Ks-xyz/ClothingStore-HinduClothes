import { FooterContent } from '../models/footer-content-model';

export const FOOTER_CONTENT: FooterContent = [
	{
		id: 'categories',
		name: 'Categories',
		items: [
			{
				id: 'saree',
				name: 'Sarees',
				gender: 'women',
			},
			{
				id: 'lengha-choli',
				name: 'Lehenga',
				gender: 'women',
			},

			{
				id: 'gouns',
				name: 'Gowns',
				gender: 'women',
			},

			{
				id: 'kurta',
				name: "Men's Kurta",
				gender: 'men',
			},
			{
				id: 'jeans',
				name: "Men's Jeans",
				gender: 'men',
			},

			{
				id: 'dress',
				name: 'Dresses',
				gender: 'women',
			},
		],
	},
	{
		id: 'information',
		name: 'Information',
		items: [
			{
				id: 'about-us',
				name: 'About Us',
			},
			{
				id: 'terms-conditions',
				name: 'Terms & Conditions',
			},
			{
				id: 'returns-exchanges',
				name: 'Returns & Exchanges',
			},
			{
				id: 'shipping-delivery',
				name: 'Shipping & Delivery',
			},
			{
				id: 'privacy-policy',
				name: 'Privacy Policy',
			},
		],
	},
	{
		id: 'useFulLinks',
		name: 'Help & Support',
		items: [
			{
				id: 'blog',
				name: 'Blog',
			},
			{
				id: 'contact-us',
				name: 'Contact Us',
			},
			{
				id: 'my-account',
				name: 'My Account',
			},
			{
				id: 'size-guide',
				name: 'Sizer Guide',
			},
			{
				id: 'faqs',
				name: 'FAQs',
			},
		],
	},
];
