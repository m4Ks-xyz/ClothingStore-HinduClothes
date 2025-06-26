import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MEN_JEANS } from '../../../products/constants/Men/men-jeans.constant';
import { BaseProduct } from '../../../products/models/base-product.model';
import { WOMEN_GOUNS } from '../../../products/constants/Women/gouns.constant';
import { WOMEN_KURTA } from '../../../products/constants/Women/women-kurta.constant';
import { MEN_KURTA } from '../../../products/constants/Men/men-kurta.constant';
import { SHOES } from '../../../products/constants/shoes.constant';
import { WOMEN_LENGA_CHOLI } from '../../../products/constants/Women/lengha-choli.constant';

@Component({
	selector: 'app-home',
	imports: [MainCarouselComponent, ProductSliderComponent],
	templateUrl: './home.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
	readonly menJeans = signal<BaseProduct[]>(MEN_JEANS);
	readonly womenGouns = signal<BaseProduct[]>(WOMEN_GOUNS);
	readonly womenKurta = signal<BaseProduct[]>(WOMEN_KURTA);
	readonly menKurta = signal<BaseProduct[]>(MEN_KURTA);
	readonly shoes = signal<BaseProduct[]>(SHOES);
	readonly lenghaCholi = signal<BaseProduct[]>(WOMEN_LENGA_CHOLI);
}
