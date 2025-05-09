import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { menJeans } from '../../data/Men/men_jeans';
import { menKurta } from '../../data/Men/men_kurta';
import { shoes } from '../../data/shoes';
import { gounsPage1 } from '../../data/Women/gouns';
import { womenKurta } from '../../data/Women/womenKurta';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { WomenGouns } from './model/gouns-model';
import { MenJeans } from './model/men-jeans.model';
import { MenKurta } from './model/men-kurta-model';
import { Shoes } from './model/shoes-model';
import { WomenKurta } from './model/women-kurta-model';
import { ProductSliderComponent } from './product-slider/product-slider.component';

@Component({
	selector: 'app-home',
	imports: [MainCarouselComponent, ProductSliderComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	menJeans = signal<MenJeans[]>(menJeans);
	womenGouns = signal<WomenGouns[]>(gounsPage1);
	womenKurta = signal<WomenKurta[]>(womenKurta);
	menKurta = signal<MenKurta[]>(menKurta);
	shoes = signal<Shoes[]>(shoes);
}
