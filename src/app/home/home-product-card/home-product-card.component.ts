import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WomenGouns } from '../model/gouns-model';
import { MenJeans } from '../model/men-jeans.model';
import { MenKurta } from '../model/men-kurta-model';
import { Shoes } from '../model/shoes-model';
import { WomenKurta } from '../model/women-kurta-model';

@Component({
	selector: 'app-home-product-card',
	imports: [CurrencyPipe],
	templateUrl: './home-product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProductCardComponent {
	readonly product = input.required<
		MenJeans | WomenGouns | WomenKurta | MenKurta | Shoes
	>();
}
