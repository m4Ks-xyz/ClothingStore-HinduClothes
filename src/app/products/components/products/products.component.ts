import {
	ChangeDetectionStrategy,
	Component,
	computed,
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

	// Query param
	readonly category = input.required<ProductCategory>();

	readonly products = computed(() => {
		return this.#productsService.getProductsByCategory(this.category());
	});

	readonly filterContent = this.#productsService.filterContent;

	selectedFilters(value: string, name: string): void {
		this.#productsService.toggleFilter(value, name);
	}
}
