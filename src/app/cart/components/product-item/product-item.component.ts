import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductWrapper } from '../../../products/types/product-wrapper.model';

@Component({
	selector: 'app-product-item',
	imports: [CurrencyPipe],
	templateUrl: './product-item.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
	readonly productWrapper = input.required<ProductWrapper>();
}
