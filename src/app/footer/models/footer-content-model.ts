export interface FooterItem {
	id: string;
	name: string;
	gender?: 'men' | 'women';
}

export interface FooterSection {
	id: string;
	name: string;
	items: FooterItem[];
}

export type FooterContent = FooterSection[];
