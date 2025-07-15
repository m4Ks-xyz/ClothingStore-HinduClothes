import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Review } from '../../../auth/models/review.model';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-product-review-card',
	imports: [StarRatingComponent, DatePipe],
	templateUrl: './product-review-card.component.html',
	styleUrl: './product-review-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductReviewCardComponent {
	readonly review = input.required<Review>();
}
