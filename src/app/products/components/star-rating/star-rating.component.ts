import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Rating } from '../../../auth/models/ratings.model';
import { RatingStars } from './rating-star.type';
import { RATING_STARS } from './rating-stars.constant';

@Component({
	selector: 'app-star-rating',
	imports: [MatIconModule],
	templateUrl: './star-rating.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
	readonly rating = input.required<Rating | undefined>();

	readonly RATING_STARS: RatingStars = RATING_STARS;
}
