import {
	ChangeDetectionStrategy,
	Component,
	inject,
	input,
	output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiselectFilterComponent } from '../filters/multiselect-filter/multiselect-filter.component';
import { PriceFilterComponent } from '../filters/price-filter/price-filter.component';
import { StockFilterComponent } from '../filters/stock-filter/stock-filter.component';
import { ProductsService } from '../../services/products.service';
import { ProductFilters } from '../../types/product-filters.type';

@Component({
	selector: 'app-products-filters',
	imports: [
		FormsModule,
		MultiselectFilterComponent,
		PriceFilterComponent,
		StockFilterComponent,
	],
	templateUrl: './products-filters.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsFiltersComponent {
	readonly #productService = inject(ProductsService);

	readonly minPrice = input<number>();
	readonly maxPrice = input<number>();
	readonly color = input<string[]>();
	readonly size = input<string[]>();
	readonly discount = input<string[]>();
	readonly stock = input<string>();
	readonly minAllowedPrice = input<number>();
	readonly maxAllowedPrice = input<number>();

	readonly productFilter = output<ProductFilters>();

	readonly FILTER_CONTENT = this.#productService.filterContent;

	toggleStock(stock: string | undefined) {
		this.productFilter.emit({ stock });
	}

	selectMultipleFilters(name: string, value: string[]) {
		this.productFilter.emit({ [name]: value.join(',') });
	}

	priceFilters(price: { minPrice?: number; maxPrice?: number }) {
		this.productFilter.emit({
			minPrice: price.minPrice,
			maxPrice: price.maxPrice,
		});
	}
}
