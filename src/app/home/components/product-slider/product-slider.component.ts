import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnknownProduct } from '../../../products/types/unknown-product.type';
import { HomeProductCardComponent } from '../home-product-card/home-product-card.component';

@Component({
	selector: 'app-product-slider',
	imports: [HomeProductCardComponent],
	templateUrl: './product-slider.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSliderComponent {
	readonly title = input.required<string>();
	readonly products = input.required<UnknownProduct[]>();
}
