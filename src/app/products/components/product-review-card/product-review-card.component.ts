import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Review } from '../../../auth/models/review.model';
import { DatePipe } from '@angular/common';
import { Rating } from '../../../auth/models/ratings.model';

@Component({
	selector: 'app-product-review-card',
	imports: [StarRatingComponent, DatePipe],
	templateUrl: './product-review-card.component.html',
	styles: `
		.container {
			box-shadow: #000000 0 5px 15px;
			padding: 15px;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductReviewCardComponent {
	readonly review = input.required<Review>();
	readonly rating = input.required<Rating | undefined>();
}
