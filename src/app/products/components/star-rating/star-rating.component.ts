import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RatingStars } from './rating-star.type';
import { RATING_STARS } from './rating-stars.constant';

@Component({
	selector: 'app-star-rating',
	imports: [MatIconModule],
	templateUrl: './star-rating.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
	readonly rating = input.required<number | null | undefined>();

	readonly RATING_STARS: RatingStars = RATING_STARS;
}
