import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductModel } from '../../../products/models/product.model';

@Component({
	selector: 'app-home-product-card',
	imports: [CurrencyPipe, RouterLink, NgOptimizedImage],
	styles: `
		.productCard .text {
			transition: transform 0.3s ease-in-out;
		}
		.productCard:hover .text {
			transform: translateY(-1rem);
		}

		.productCard:hover {
			box-shadow: #000000 0 5px 15px;
		}
	`,
	templateUrl: './home-product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProductCardComponent {
	readonly product = input.required<ProductModel>();
}
