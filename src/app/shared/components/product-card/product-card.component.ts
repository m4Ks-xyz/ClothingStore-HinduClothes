import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductModel } from '../../../products/models/product.model';

@Component({
	selector: 'app-product-card',
	standalone: true,
	imports: [CurrencyPipe, RouterModule],
	styleUrl: './product-card.component.scss',
	templateUrl: './product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	readonly item = input.required<ProductModel>();
}
