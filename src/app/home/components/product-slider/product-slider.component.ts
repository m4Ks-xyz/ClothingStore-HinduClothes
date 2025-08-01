import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeProductCardComponent } from '../home-product-card/home-product-card.component';
import { ProductModel } from '../../../products/models/product.model';

@Component({
	selector: 'app-product-slider',
	imports: [HomeProductCardComponent],
	templateUrl: './product-slider.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSliderComponent {
	readonly title = input.required<string>();
	readonly products = input.required<ProductModel[]>();
}
