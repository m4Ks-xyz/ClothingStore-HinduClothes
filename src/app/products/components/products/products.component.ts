import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { generateUUID } from '../../../shared/utils/math/random-uuid-util';
import { menJeans } from '../../constants/Men/men-jeans.constant';
import { menKurta } from '../../constants/Men/men-kurta.constant';
import { gounsPage1 } from '../../constants/Women/gouns.constant';
import { lengaCholi } from '../../constants/Women/lengha-choli.constant';
import { womenKurta } from '../../constants/Women/women-kurta.constant';
import { filters } from '../../constants/filter-data.constant.constant';
import { shoes } from '../../constants/shoes.constant';
import { Filter } from '../../models/filter-data.model';
import { WomenGouns } from '../../models/gouns-model';
import { LengaCholi } from '../../models/lenga-choli-model';
import { MenJeans } from '../../models/men-jeans.model';
import { MenKurta } from '../../models/men-kurta-model';
import { Shoes } from '../../models/shoes-model';
import { WomenKurta } from '../../models/women-kurta-model';

export type UnknownProduct =
	| MenJeans
	| WomenGouns
	| WomenKurta
	| MenKurta
	| Shoes;

@Component({
	selector: 'app-products',
	imports: [
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MatDividerModule,
		MatCheckboxModule,
		FormsModule,
		ProductCardComponent,
	],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
	readonly menJeans = signal<MenJeans[]>(menJeans);
	readonly womenGouns = signal<WomenGouns[]>(gounsPage1);
	readonly womenKurta = signal<WomenKurta[]>(womenKurta);
	readonly menKurta = signal<MenKurta[]>(menKurta);
	readonly shoes = signal<Shoes[]>(shoes);
	readonly lenghaCholi = signal<LengaCholi[]>(lengaCholi);

	readonly filterContent: Filter[] = filters;

	ngOnInit() {
	
	}
}
