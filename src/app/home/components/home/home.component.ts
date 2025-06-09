import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MEN_JEANS } from '../../../products/constants/Men/men-jeans.constant';
import { MEN_KURTA } from '../../../products/constants/Men/men-kurta.constant';
import { SHOES } from '../../../products/constants/shoes.constant';
import { WOMEN_GOUNS } from '../../../products/constants/Women/gouns.constant';
import { WOMEN_LENGA_CHOLI } from '../../../products/constants/Women/lengha-choli.constant';
import { WOMEN_KURTA } from '../../../products/constants/Women/women-kurta.constant';
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
export default class HomeComponent {
	readonly menJeans = signal<MenJeans[]>(MEN_JEANS);
	readonly womenGouns = signal<WomenGouns[]>(WOMEN_GOUNS);
	readonly womenKurta = signal<WomenKurta[]>(WOMEN_KURTA);
	readonly menKurta = signal<MenKurta[]>(MEN_KURTA);
	readonly shoes = signal<Shoes[]>(SHOES);
	readonly lenghaCholi = signal<LengaCholi[]>(WOMEN_LENGA_CHOLI);
}
