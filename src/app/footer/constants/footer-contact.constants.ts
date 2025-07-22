export const FOOTER_CONTACT: FooterContact[] = [
	{
		link: 'https://www.google.pl/maps/place/Warszawa/@52.2330974,20.8966151,11z/data=!3m1!4b1!4m6!3m5!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!8m2!3d52.2296756!4d21.0122287!16zL20vMDgxbV8?entry=tts&g_ep=EgoyMDI1MDUwNy4wIPu8ASoASAFQAw%3D%3D&skid=ae411dd9-0e86-4ccb-8ff1-ff637405d773',
		icon: 'location_on',
		text: 'Warsaw 02-900, Aleja Wilanowska 89',
	},
	{
		link: 'mailto:konradurbanski@gmail.com',
		icon: 'mail',
		text: 'konradurbanski@gmail.com',
	},
	{
		link: 'tel:+48743432343',
		icon: 'phone',
		text: '+48 743 432 343',
	},
];

export interface FooterContact {
	link: string;
	icon: string;
	text: string;
}
