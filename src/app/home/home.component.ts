import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { menJeans } from '../../data/Men/men_jeans';
import { menKurta } from '../../data/Men/men_kurta';
import { shoes } from '../../data/shoes';
import { gounsPage1 } from '../../data/Women/gouns';
import { lengaCholi } from '../../data/Women/lenghaCholi';
import { womenKurta } from '../../data/Women/womenKurta';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { WomenGouns } from './model/gouns-model';
import { LengaCholi } from './model/lenga-choli-model';
import { MenJeans } from './model/men-jeans.model';
import { MenKurta } from './model/men-kurta-model';
import { Shoes } from './model/shoes-model';
import { WomenKurta } from './model/women-kurta-model';
import { ProductSliderComponent } from './product-slider/product-slider.component';

@Component({
	selector: 'app-home',
	imports: [MainCarouselComponent, ProductSliderComponent, NavbarComponent],
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
