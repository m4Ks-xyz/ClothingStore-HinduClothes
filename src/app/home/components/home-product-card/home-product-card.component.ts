import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BaseProduct } from '../../../products/models/base-product.model';

@Component({
	selector: 'app-home-product-card',
	imports: [CurrencyPipe],
	templateUrl: './home-product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProductCardComponent {
	readonly product = input.required<BaseProduct>();
}
