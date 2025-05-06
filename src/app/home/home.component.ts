import {
	ChangeDetectionStrategy,
	Component,
	computed,
	signal,
} from '@angular/core';
import { menJeans } from '../../data/Men/men_jeans';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { MenJeans } from './model/men-jeans.model';
import { ProductSliderComponent } from './product-slider/product-slider.component';

@Component({
	selector: 'app-home',
	imports: [MainCarouselComponent, ProductSliderComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	menJeansData = signal<MenJeans[]>(menJeans);
	slicedMenJeansData = computed(() => {
		return this.menJeansData().slice(0, 5);
	});
}
