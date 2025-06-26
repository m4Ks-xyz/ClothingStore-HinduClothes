import {
	ChangeDetectionStrategy,
	Component,
	computed,
	effect,
	inject,
	input,
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
import { selectProducts } from '../../data-access/store/products/products.selectors';
import { RouterLink } from '@angular/router';
import { ProductParams } from '../../data-access/services/product-api.service';

@Component({
	selector: 'app-products',
	imports: [
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MatDividerModule,
		MatCheckboxModule,
		FormsModule,
		ProductCardComponent,
		RouterLink,
	],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {
	readonly #productsService = inject(ProductsService);
	readonly #store = inject(Store);

	// Query param
	readonly levelOne = input.required<ProductCategory>();
	readonly levelTwo = input.required<ProductCategory>();
	readonly levelThree = input.required<ProductCategory>();

	readonly color = input<string>();
	readonly size = input<string>();
	readonly minPrice = input<string>();
	readonly maxPrice = input<string>();
	readonly discount = input<string>();
	readonly category = input<ProductCategory>();
	readonly stock = input<string>();
	readonly sort = input<string>();
	readonly pageNumber = input<string>();
	readonly pageSize = input<string>();

	readonly productParams = computed((): ProductParams => {
		return {
			color: this.color(),
			sizes: this.size(),
			minPrice: this.minPrice(),
			maxPrice: this.maxPrice(),
			minDiscount: this.discount(),
			stock: this.stock(),
			sort: this.sort(),
			pageNumber: this.pageNumber(),
			pageSize: this.pageSize(),
			levelThree: this.levelThree(),
			levelOne: this.levelOne(),
			levelTwo: this.levelTwo(),
		};
	});

	readonly productState = this.#store.selectSignal(selectProducts);

	constructor() {
		effect(() => {
			const params = this.productParams();
			console.log(params);
			this.#store.dispatch(
				productsActions.findProductByCategory({
					params,
				}),
			);
		});
	}

	readonly filterContent = this.#productsService.filterContent;

	selectedFilters(value: string, name: string): void {
		this.#productsService.toggleFilter(value, name);
	}
}
