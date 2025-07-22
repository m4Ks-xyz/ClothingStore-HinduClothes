import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
	MAT_BOTTOM_SHEET_DATA,
	MatBottomSheetModule,
	MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ProductsFiltersComponent } from '../../products-filters/products-filters.component';
import {
	BottomSheetMobileData,
	BottomSheetMobileResults,
} from './bottom-sheet-mobile-data.type';
import { ProductFilters } from '../../../types/product-filters.type';

@Component({
	selector: 'app-bottom-sheet-mobile',
	imports: [MatButtonModule, MatBottomSheetModule, ProductsFiltersComponent],
	templateUrl: './bottom-sheet-mobile.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomSheetMobileComponent {
	readonly #bottomSheetRef = inject(
		MatBottomSheetRef<BottomSheetMobileComponent, BottomSheetMobileResults>,
	);

	readonly bottomSheetConfig = inject<BottomSheetMobileData>(
		MAT_BOTTOM_SHEET_DATA,
	);

	readonly filtersData = signal<ProductFilters>(
		this.bottomSheetConfig.filters ?? {},
	);

	saveFilters(filter: ProductFilters) {
		return this.filtersData.update((prev) => ({
			...prev,
			...filter,
		}));
	}

	applyFilters() {
		const result: BottomSheetMobileResults = { filters: this.filtersData() };
		this.#bottomSheetRef.dismiss(result);
	}
}
