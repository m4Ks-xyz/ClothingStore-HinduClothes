export interface FilterOption {
	value: string;
	label: string;
}

export interface Filter {
	id: string;
	name: string;
	options: FilterOption[];
}
