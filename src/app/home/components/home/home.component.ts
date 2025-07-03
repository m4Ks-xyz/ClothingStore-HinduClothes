import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HOME_FEATURED_ITEMS } from '../../../products/constants/home-featured-items.constant';
import { HomeFeaturedItems } from '../../../products/models/home-featured-items.model';

@Component({
	selector: 'app-home',
	imports: [MainCarouselComponent, ProductSliderComponent],
	templateUrl: './home.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
	readonly featuredProducts = signal<HomeFeaturedItems[]>(HOME_FEATURED_ITEMS);
}
