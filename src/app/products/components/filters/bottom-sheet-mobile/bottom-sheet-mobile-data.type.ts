import { ProductFilters } from '../../../types/product-filters.type';

export type BottomSheetMobileData = {
	filters: ProductFilters;
	minAllowed: number;
	maxAllowed: number;
};

export type BottomSheetMobileResults = {
	filters: ProductFilters;
};
