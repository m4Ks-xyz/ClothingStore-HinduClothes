import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductModel } from '../../../products/models/product.model';

@Component({
	selector: 'app-product-card',
	standalone: true,
	imports: [CurrencyPipe, RouterModule],
	styles: `
		.productCard .text {
			box-shadow: transparent 1px 1px 1px;
			transition: transform 0.3s ease-in-out;
		}

		.productCard:hover .text {
			transform: translateY(-1rem);
		}

		.productCard:hover .text {
			box-shadow: #000000 0 5px 15px;
		}
	`,
	templateUrl: './product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	readonly item = input.required<ProductModel>();
}
