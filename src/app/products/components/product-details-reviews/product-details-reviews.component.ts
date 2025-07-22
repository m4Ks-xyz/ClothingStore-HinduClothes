import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductRatingComponent } from '../product-rating/product-rating.component';
import { ProductReviewCardComponent } from '../product-review-card/product-review-card.component';
import { Review } from '../../../auth/models/review.model';
import { Rating } from '../../../auth/models/ratings.model';
import { NumRatings } from '../../models/num-ratings.model';

@Component({
	selector: 'app-product-details-reviews',
	imports: [ProductRatingComponent, ProductReviewCardComponent],
	templateUrl: './product-details-reviews.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsReviewsComponent {
	readonly reviews = input.required<Review[] | undefined>();
	readonly ratings = input.required<Rating[] | undefined>();
	readonly numRatings = input.required<NumRatings | undefined>();

	getRatingOfUser(userId: string) {
		return this.ratings()?.find((rating) => rating.user === userId);
	}
}
