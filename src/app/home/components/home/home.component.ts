import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HomeFeaturedItems } from '../../../products/models/home-featured-items.model';
import { Store } from '@ngrx/store';
import { selectHomePageProducts } from '../../../products/data-access/store/products/products.selectors';
import { EmptyStateMessageComponent } from '../../../shared/components/empty-state-message/empty-state-message.component';

@Component({
	selector: 'app-home',
	imports: [
		MainCarouselComponent,
		ProductSliderComponent,
		EmptyStateMessageComponent,
	],
	templateUrl: './home.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
	readonly #store = inject(Store);

	readonly featuredProducts = this.#store.selectSignal<
		HomeFeaturedItems[] | undefined
	>(selectHomePageProducts);
}
