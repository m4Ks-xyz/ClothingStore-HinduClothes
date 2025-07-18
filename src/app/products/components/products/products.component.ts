import {
	ChangeDetectionStrategy,
	Component,
	computed,
	DestroyRef,
	effect,
	inject,
	input,
	Signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductsService } from '../../services/products.service';
import { ProductCategory } from '../../types/product-catergory.type';
import { Store } from '@ngrx/store';
import { productsActions } from '../../data-access/store/products/products.actions';
import {
	selectProducts,
	selectTotalProducts,
} from '../../data-access/store/products/products.selectors';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductParams } from '../../data-access/services/product-api.service';
import { ProductModel } from '../../models/product.model';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetMobileComponent } from '../filters/bottom-sheet-mobile/bottom-sheet-mobile.component';
import { ProductsFiltersComponent } from '../products-filters/products-filters.component';
import {
	BottomSheetMobileData,
	BottomSheetMobileResults,
} from '../filters/bottom-sheet-mobile/bottom-sheet-mobile-data.type';
import { ProductFilters } from '../../types/product-filters.type';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const parseQueryParam = (splitCharacter = ',') => {
	return (queryParam: string | undefined): string[] => {
		if (Array.isArray(queryParam)) {
			return queryParam;
		}
		if (queryParam) {
			return queryParam.split(splitCharacter);
		}
		return [];
	};
};

@Component({
	selector: 'app-products',
	imports: [
		MatPaginatorModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MatDividerModule,
		MatCheckboxModule,
		FormsModule,
		ProductCardComponent,
		RouterLink,
		ProductsFiltersComponent,
	],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {
	readonly #productsService = inject(ProductsService);
	readonly #store = inject(Store);
	readonly #router = inject(Router);
	readonly #activatedRoute = inject(ActivatedRoute);
	readonly #bottomSheet = inject(MatBottomSheet);
	readonly #destroyRef = inject(DestroyRef);

	// Query param
	readonly levelOne = input.required<ProductCategory>();
	readonly levelTwo = input.required<ProductCategory>();
	readonly levelThree = input.required<ProductCategory>();
	readonly color = input([], { transform: parseQueryParam() });
	readonly size = input([], { transform: parseQueryParam() });
	readonly price = input([], { transform: parseQueryParam('-') });
	readonly discount = input([], { transform: parseQueryParam() });
	readonly stock = input<string>();
	readonly sort = input<string>();
	readonly pageNumber = input<number>();
	readonly pageSize = input<number>();
	readonly minPrice = input(undefined, {
		transform: (v: string) => {
			const parsed = Number(v);
			return isNaN(parsed) ? this.MIN_ALLOWED_PRICE : parsed;
		},
	});
	readonly maxPrice = input(undefined, {
		transform: (v: string) => {
			const parsed = Number(v);
			return isNaN(parsed) ? this.MAX_ALLOWED_PRICE : parsed;
		},
	});

	readonly productParams = computed((): ProductParams => {
		return {
			color: this.color().join(','),
			sizes: this.size().join(','),
			minPrice: this.minPrice(),
			maxPrice: this.maxPrice(),
			minDiscount: this.discount().join(','),
			stock: this.stock(),
			sort: this.sort(),
			pageNumber: this.pageNumber(),
			pageSize: this.pageSize(),
			levelThree: this.levelThree(),
			levelOne: this.levelOne(),
			levelTwo: this.levelTwo(),
		};
	});

	readonly productState: Signal<ProductModel[]> =
		this.#store.selectSignal(selectProducts);

	readonly totalProducts = this.#store.selectSignal(selectTotalProducts);

	readonly MAX_ALLOWED_PRICE = 5000;
	readonly MIN_ALLOWED_PRICE = 10;

	constructor() {
		effect(() => {
			const params = this.productParams();
			this.#store.dispatch(
				productsActions.findProductByCategory({
					params,
				}),
			);
		});
	}

	openBottomSheet() {
		const ref = this.#bottomSheet.open<
			BottomSheetMobileComponent,
			BottomSheetMobileData,
			BottomSheetMobileResults
		>(BottomSheetMobileComponent, {
			data: {
				filters: {
					minPrice: this.minPrice(),
					maxPrice: this.maxPrice(),
					color: this.color(),
					sizes: this.size(),
					discount: this.discount(),
					stock: this.stock(),
				},
				minAllowed: this.MIN_ALLOWED_PRICE,
				maxAllowed: this.MAX_ALLOWED_PRICE,
			},
		});

		ref
			.afterDismissed()
			.pipe(takeUntilDestroyed(this.#destroyRef))
			.subscribe((data) => this.setFilter(data?.filters ?? {}));
	}

	handlePageEvent(e: PageEvent) {
		this.#router.navigate([], {
			queryParams: { pageSize: e.pageSize, pageNumber: e.pageIndex + 1 },
			relativeTo: this.#activatedRoute,
			queryParamsHandling: 'merge',
		});
	}

	selectedFilters(value: string, name: string): void {
		this.#productsService.toggleFilter(value, name);
	}

	setFilter(filterParams: ProductFilters) {
		this.#router.navigate([], {
			queryParams: filterParams,
			relativeTo: this.#activatedRoute,
			queryParamsHandling: 'merge',
		});
	}
}
