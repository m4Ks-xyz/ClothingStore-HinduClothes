import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
	selector: 'app-product-review-card',
	imports: [StarRatingComponent],
	templateUrl: './product-review-card.component.html',
	styleUrl: './product-review-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductReviewCardComponent {}
