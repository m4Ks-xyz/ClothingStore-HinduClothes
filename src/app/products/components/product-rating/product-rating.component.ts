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
		const ratings = this.ratings();
		if (!ratings) return null;

		const entries = Object.entries(ratings) as [string, number][];
		entries.sort((a, b) => b[1] - a[1]);

		return Number(entries[0][0]);
	});
}
