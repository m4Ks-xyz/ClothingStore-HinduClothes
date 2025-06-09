import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WomenGouns } from '../../../products/models/gouns-model';
import { MenJeans } from '../../../products/models/men-jeans.model';
import { MenKurta } from '../../../products/models/men-kurta-model';
import { Shoes } from '../../../products/models/shoes-model';
import { WomenKurta } from '../../../products/models/women-kurta-model';

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
