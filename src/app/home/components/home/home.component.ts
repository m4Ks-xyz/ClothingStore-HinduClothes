import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { menJeans } from '../../../products/constants/Men/men-jeans.constant';
import { menKurta } from '../../../products/constants/Men/men-kurta.constant';
import { shoes } from '../../../products/constants/shoes.constant';
import { gounsPage1 } from '../../../products/constants/Women/gouns.constant';
import { lengaCholi } from '../../../products/constants/Women/lengha-choli.constant';
import { womenKurta } from '../../../products/constants/Women/women-kurta.constant';
import { WomenGouns } from '../../../products/models/gouns-model';
import { LengaCholi } from '../../../products/models/lenga-choli-model';
import { MenJeans } from '../../../products/models/men-jeans.model';
import { MenKurta } from '../../../products/models/men-kurta-model';
import { Shoes } from '../../../products/models/shoes-model';
import { WomenKurta } from '../../../products/models/women-kurta-model';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { ProductSliderComponent } from '../product-slider/product-slider.component';

@Component({
	selector: 'app-home',
	imports: [MainCarouselComponent, ProductSliderComponent],
	templateUrl: './home.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	readonly menJeans = signal<MenJeans[]>(menJeans);
	readonly womenGouns = signal<WomenGouns[]>(gounsPage1);
	readonly womenKurta = signal<WomenKurta[]>(womenKurta);
	readonly menKurta = signal<MenKurta[]>(menKurta);
	readonly shoes = signal<Shoes[]>(shoes);
	readonly lenghaCholi = signal<LengaCholi[]>(lengaCholi);
}
