import {
	ChangeDetectionStrategy,
	Component,
	computed,
	input,
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RATING_CATEGORIES } from '../../constants/product-rating-categories.constant';
import { NumRatings, RatingCategory } from '../../models/num-ratings.model';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
	selector: 'app-product-rating',
	imports: [MatProgressBarModule, StarRatingComponent],
	templateUrl: './product-rating.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductRatingComponent {
	readonly ratings = input.required<NumRatings | undefined>();
	readonly numberOfRatings = input.required<number | undefined>();

	readonly ratingCategories: RatingCategory[] = RATING_CATEGORIES;

	mostPopularRating = computed(() => {
		const ratings = Object.entries(this.ratings() ?? {});
		let mostRated = 0;
		let mostRatedKey = '';

		for (let i = 0; i < ratings.length; i++) {
			const key = ratings[i][0];
			const value = ratings[i][1];

			if (value > mostRated) {
				mostRatedKey = key;
				mostRated = value;
			}
		}
		return +mostRatedKey;
	});
}
