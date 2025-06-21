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
import { ProductParams } from '../../data-access/services/product-api.service';
import { selectProducts } from '../../data-access/store/products/products.selectors';

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
	],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {
	readonly #productsService = inject(ProductsService);
	readonly #store = inject(Store);

	readonly color = input<string>();
	readonly sizes = input<string>();
	readonly minPrice = input<string>();
	readonly maxPrice = input<string>();
	readonly minDiscount = input<string>();
	readonly category = input<ProductCategory>();
	readonly stock = input<string>();
	readonly sort = input<string>();
	readonly pageNumber = input<string>();
	readonly pageSize = input<string>();

	readonly productParams = computed((): ProductParams => {
		return {
			colors: this.color(),
			sizes: this.sizes(),
			minPrice: this.minPrice(),
			maxPrice: this.maxPrice(),
			minDiscount: this.minDiscount(),
			category: this.categoryId(),
			stock: this.stock(),
			sort: this.sort(),
			pageNumber: this.pageNumber(),
			pageSize: this.pageSize(),
		};
	});

	readonly productState = this.#store.selectSignal(selectProducts);

	// Query param
	readonly categoryId = input.required<ProductCategory>();

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

	selectedFilters(value: string, name: string): void {
		this.#productsService.toggleFilter(value, name);
	}
}
