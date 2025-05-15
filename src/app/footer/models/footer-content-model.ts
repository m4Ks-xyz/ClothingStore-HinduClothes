export interface FooterItem {
	id: string;
	name: string;
}

export interface FooterSection {
	id: string;
	name: string;
	items: FooterItem[];
}

export type FooterContent = FooterSection[];
