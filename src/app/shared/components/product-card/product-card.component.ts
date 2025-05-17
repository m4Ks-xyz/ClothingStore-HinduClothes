import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BaseProduct } from '../../../products/models/base-product.model';

@Component({
	selector: 'app-product-card',
	standalone: true,
	imports: [CurrencyPipe],
	templateUrl: './product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	item = input.required<BaseProduct>();

  
}
