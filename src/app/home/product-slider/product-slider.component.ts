import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeProductCardComponent } from '../home-product-card/home-product-card.component';
import { WomenGouns } from '../model/gouns-model';
import { MenJeans } from '../model/men-jeans.model';
import { MenKurta } from '../model/men-kurta-model';
import { WomenKurta } from '../model/women-kurta-model';
import { Shoes } from '../model/shoes-model';

@Component({
	selector: 'app-product-slider',
	imports: [HomeProductCardComponent],
	templateUrl: './product-slider.component.html',
	styleUrl: './product-slider.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSliderComponent {
	readonly title = input.required<string>();
	readonly products = input.required<
		MenJeans[] | WomenGouns[] | WomenKurta[] | MenKurta[] | Shoes[]
	>();
}
