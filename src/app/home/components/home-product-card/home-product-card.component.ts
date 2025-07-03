import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BaseProduct } from '../../../products/models/base-product.model';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-home-product-card',
	imports: [CurrencyPipe, RouterLink],
	templateUrl: './home-product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProductCardComponent {
	readonly product = input.required<BaseProduct>();
}
