import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	inject,
	OnInit,
	signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MAIN_CAROUSEL_DATA } from './constants/main-carousel';
import { MainCarouselDataModel } from './models/main-carousel-data-model';

@Component({
	selector: 'app-main-carousel',
	imports: [RouterModule],
	templateUrl: './main-carousel.component.html',
	styleUrl: './main-carousel.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainCarouselComponent implements OnInit {
	readonly #destroyRef = inject(DestroyRef);

	readonly carouselData = signal<MainCarouselDataModel[]>(MAIN_CAROUSEL_DATA);
	readonly currentSlide = signal(0);

	ngOnInit() {
		this.autoPlay();
	}

	autoPlay() {
		const autoPlayInterval = setInterval(() => {
			this.currentSlide.update(
				(prev) => (prev + 1) % this.carouselData().length,
			);
		}, 5000);

		this.#destroyRef.onDestroy(() => {
			clearInterval(autoPlayInterval);
		});
	}
}
