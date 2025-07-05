import {
	ChangeDetectionStrategy,
	Component,
	computed,
	effect,
	inject,
	input,
	numberAttribute,
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
import { StockFilterComponent } from '../filters/stock-filter/stock-filter.component';
import { MultiselectFilterComponent } from '../filters/multiselect-filter/multiselect-filter.component';
import { PriceFilterComponent } from '../filters/price-filter/price-filter.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetMobileComponent } from '../filters/bottom-sheet-mobile/bottom-sheet-mobile.component';

const parseQueryParam = (splitCharacter = ',') => {
	return (queryParam: string | undefined): string[] => {
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
		StockFilterComponent,
		MultiselectFilterComponent,
		PriceFilterComponent,
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

	readonly MAX_ALLOWED_PRICE = 2000;
	readonly MIN_ALLOWED_PRICE = 10;

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
	readonly minPrice = input(undefined, { transform: numberAttribute });
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

	readonly filterContent = this.#productsService.filterContent;

	openBottomSheet() {
		this.#bottomSheet.open(BottomSheetMobileComponent);
	}

	handlePageEvent(e: PageEvent) {
		this.#router.navigate([], {
			queryParams: { pageSize: e.pageSize, pageNumber: e.pageIndex + 1 },
			relativeTo: this.#activatedRoute,
			queryParamsHandling: 'merge',
		});
	}

	toggleStock(stock: string | undefined) {
		this.#router.navigate([], {
			queryParams: { stock: stock },
			relativeTo: this.#activatedRoute,
			queryParamsHandling: 'merge',
		});
	}

	selectMultipleFilters(name: string, value: string[]) {
		this.#router.navigate([], {
			queryParams: { [name]: value.join(',') },
			relativeTo: this.#activatedRoute,
			queryParamsHandling: 'merge',
		});
	}

	priceFilters(price: { min?: number; max?: number }) {
		this.#router.navigate([], {
			queryParams: { minPrice: price.min, maxPrice: price.max },
			relativeTo: this.#activatedRoute,
			queryParamsHandling: 'merge',
		});
	}

	selectedFilters(value: string, name: string): void {
		this.#productsService.toggleFilter(value, name);
	}
}
