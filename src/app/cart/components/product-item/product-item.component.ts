import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { ProductWrapper } from '../../../products/types/product-wrapper.model';

@Component({
	selector: 'app-product-item',
	imports: [CurrencyPipe, NgOptimizedImage],
	templateUrl: './product-item.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
	readonly productWrapper = input.required<ProductWrapper>();
}
