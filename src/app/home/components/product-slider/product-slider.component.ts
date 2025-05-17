import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeProductCardComponent } from '../home-product-card/home-product-card.component';
import { UnknownProduct } from '../../../products/components/products/products.component';

@Component({
	selector: 'app-product-slider',
	imports: [HomeProductCardComponent],
	templateUrl: './product-slider.component.html',
	styleUrl: './product-slider.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSliderComponent {
	readonly title = input.required<string>();
	readonly products = input.required<UnknownProduct[]>();
}
